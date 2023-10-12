import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import Favicon from 'react-favicon'
import { favicon, faviconBlack } from './resources/icons/icons'
import { userPrefersDarkMode } from './resources/theme/theme'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.1;
    font-family: Montserrat;
    font-weight: 300;
  } 

  body::-webkit-scrollbar {
    display: none;
  }

  ::selection {
    background: #51a2d5;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Favicon url={userPrefersDarkMode() ? favicon : faviconBlack} />
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
