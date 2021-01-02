import React, { useState } from 'react'
import styled from 'styled-components'
import { IconGoogle } from '../shared/icons'
import { Button } from 'baseui/button'
import { toaster } from 'baseui/toast'
import { getOAuthLoginURL } from '../shared/api'
import { Central } from '../components/layouts/container'

async function loginHandler() {
  return getOAuthLoginURL()
    .then((res) => {
      window.location = res['data']['redirect_url']
    })
    .catch((err) => {
      toaster.negative(err, { autoHideDuration: 2000 })
      throw err
    })
}

function Login() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Central style={{ paddingTop: '30vh' }}>
      <Button
        startEnhancer={IconGoogle}
        disabled={isLoading}
        isLoading={isLoading}
        onClick={() => {
          setIsLoading(true)
          loginHandler().catch(() => setIsLoading(false))
        }}
      >
        Login with Google
      </Button>
    </Central>
  )
}

export default Login
