import { lightTheme } from './light'
import { darkTheme } from './dark'

function userPrefersDarkMode() {
  return (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
}

export { lightTheme, darkTheme, userPrefersDarkMode }
