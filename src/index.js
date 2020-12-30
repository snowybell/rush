import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// Import font awesome @v5
import './utils/fontAwesome'

// Import @uber/basewebui
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react'
import { Client as Styletron } from 'styletron-engine-atomic'

const engine = new Styletron()
const debug = process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine()

ReactDOM.render(
  <StyletronProvider value={engine} debug={debug} debugAfterHydration>
    <App />
  </StyletronProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
