import React, { useEffect, useState } from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import { exchangeToken } from '../shared/api'
import { toaster } from 'baseui/toast'
import { Central } from '../components/layouts/container'
import { useUserStore } from '../store/user'
import Spinner from '../components/core_elements/Spinner'

function LoginCallback() {
  const location = useLocation()
  const setToken = useUserStore((state) => state.setToken)
  const [isPending, setPending] = useState(true)

  // Retrieving oAuth2 code
  const query = new URLSearchParams(location.search)
  const oAuthCode = query.has('code') && query.get('code')
  if (!oAuthCode) {
    return <Redirect to='/login' />
  }

  useEffect(() => {
    exchangeToken(oAuthCode)
      .then((res) => {
        setPending(false)
        setToken(res['data']['token'])
      })
      .catch((err) => {
        toaster.negative(err, { autoHideDuration: 2000 })
      })
  }, [])

  return isPending ? (
    <Central style={{ paddingTop: '30vh' }}>
      <Spinner />
    </Central>
  ) : (
    <Redirect to='/' />
  )
}

export default LoginCallback
