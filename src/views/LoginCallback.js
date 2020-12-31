import React from 'react'
import { Redirect, useLocation } from 'react-router-dom'

function LoginCallback() {
  const location = useLocation()
  const query = new URLSearchParams(location.search)

  const token = query.get('token')
  if (!token) {
    return <Redirect to='/login' />
  }
  return <p>Access Token: {query.get('token')}</p>
}

export default LoginCallback
