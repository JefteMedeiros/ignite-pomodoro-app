import React from 'react'
import { ThemeProvider } from 'styled-components'
import Button from './components/Button'
import { GlobalStyle } from './styles/globalstyle'
import { mainTheme } from './styles/themes'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
