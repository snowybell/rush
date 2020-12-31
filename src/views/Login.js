import React, { useState } from 'react'
import styled from 'styled-components'
import { IconGoogle } from '../shared/icons'
import { Button } from 'baseui/button'
import { toaster, ToasterContainer, PLACEMENT } from 'baseui/toast'
import { getOAuthLoginURL } from '../shared/api'

const Container = styled.div`
  margin: auto;
  width: fit-content;
  padding-top: 30vh;
`

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
    <ToasterContainer placement={PLACEMENT.topRight}>
      <Container>
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
      </Container>
    </ToasterContainer>
  )
}

export default Login
