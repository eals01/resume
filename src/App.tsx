import { useState } from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate
} from 'react-router-dom'

import Resume from './Resume'
import {
  lightTheme,
  darkTheme,
  userPrefersDarkMode
} from './resources/theme/theme'

import LanguageIcon from './resources/icons/LanguageIcon'
import DarkModeIcon from './resources/icons/DarkModeIcon'

export default function App() {
  const [darkMode, setDarkmode] = useState(userPrefersDarkMode())

  const navigate = useNavigate()
  const location = useLocation()
  const path = location.pathname

  const theme = darkMode ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={theme}>
      <Background />
      <Navigation>
        <section>
          <button onClick={() => navigate(path === '/no' ? '/en' : '/no')}>
            <LanguageIcon />
          </button>
          <button
            onClick={() => setDarkmode((previousValue) => !previousValue)}
          >
            <DarkModeIcon />
          </button>
        </section>
      </Navigation>
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

const Navigation = styled.nav`
  position: sticky;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 3em;
  padding: 0.6em;
  box-shadow: 0 -8px 10px 3px;
  background: ${(props) => props.theme.colors.background};

  section {
    display: flex;
    justify-content: flex-end;
    gap: 0.2em;

    max-width: 900px;
    height: 100%;
    margin: auto;
    padding: 0 0.7em;

    button {
      aspect-ratio: 1 / 1;
      padding: 0.3em;
      border: none;
      background: none;
      border-radius: 50%;
      transition: 0.3s;

      svg {
        height: 100%;
        color: ${(props) => props.theme.colors.text};
        transition: 0.3s;
      }

      &:hover {
        background: ${(props) => props.theme.colors.backgroundSecondary};
      }

      &:active {
        background: ${(props) => props.theme.colors.text};

        svg {
          color: ${(props) => props.theme.colors.backgroundTertiary};
        }
      }
    }
  }
`
