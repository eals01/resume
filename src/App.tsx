import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { Navigate, Route, Routes } from 'react-router-dom'

import Resume from './Resume'
import {
  lightTheme,
  darkTheme,
  userPrefersDarkMode
} from './resources/theme/theme'

export default function App() {
  const theme = userPrefersDarkMode() ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={theme}>
      <Background />
      <Routes>
        <Route path='/no' element={<Resume language='no' />} />
        <Route path='/en' element={<Resume language='en' />} />
        <Route path='*' element={<Navigate to='/no' replace />} />
      </Routes>
    </ThemeProvider>
  )
}

const Background = styled.div`
  position: fixed;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.colors.background};
`
