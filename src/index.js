import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

// Used hydrateRoot instead of render() for SSR

ReactDOM.hydrateRoot(document.getElementById('root'),
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
