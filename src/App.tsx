import React from 'react'
import Router from './Routes'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globalstyle'
import { mainTheme } from './styles/themes'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
