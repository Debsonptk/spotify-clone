import React, { Suspense } from 'react'

import ReactDOM from 'react-dom/client'

import 'services/i18n'

import App from './App'
import GlobalStyle from './components/GlobalStyle/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense>
      <GlobalStyle />
      <App />
    </Suspense>
  </React.StrictMode>,
)
