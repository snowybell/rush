import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// Import font awesome @v5
import './utils/fontAwesome'

// Import @uber/basewebui
import { Provider, DebugEngine } from 'styletron-react'
import { Client } from 'styletron-engine-atomic'
import { PLACEMENT, ToasterContainer } from 'baseui/toast'

const engine = new Client()
const debug = process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine()

ReactDOM.render(
  <Provider value={engine} debug={debug} debugAfterHydration>
    <ToasterContainer placement={PLACEMENT.topRight}>
      <App />
    </ToasterContainer>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
