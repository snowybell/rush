import { useState } from 'react'
import styled from 'styled-components'
import { IconGoogle } from '../shared/icons'
import { Button, KIND, SIZE, SHAPE } from 'baseui/button'
import { toaster, ToasterContainer, PLACEMENT } from 'baseui/toast'
import { Block } from 'baseui/block'

const Container = styled.div`
  margin: auto;
  width: fit-content;
  padding-top: 30vh;
`

async function loginHandler() {
  return new Promise((rs) => {
    setTimeout(() => {
      toaster.positive('Hello, RK!', { autoHideDuration: 2000 })
      rs()
    }, 1000)
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
            loginHandler().finally(() => {
              setIsLoading(false)
            })
          }}
        >
          Login with Google
        </Button>
      </Container>
    </ToasterContainer>
  )
}

export default Login
