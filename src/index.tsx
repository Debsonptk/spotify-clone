import React, { Suspense } from 'react'

import ReactDOM from 'react-dom/client'

import 'services/i18n'

import App from './App'
import './Styles/globalStyles.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense>
      <App />
    </Suspense>
  </React.StrictMode>,
)
