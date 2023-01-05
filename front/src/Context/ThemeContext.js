import { createContext, useState } from 'react'

export const ThemeContext = createContext(null)

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState('Dark')

  const toggleTheme = () => {
    if (theme === 'Dark') {
      setTheme('Light')
      setLightMode()
    } else {
      setTheme('Dark')
      setDarkMode()
    }
  }

  function setLightMode() {
    document.body.classList.add('light-mode')
    document.body.classList.remove('dark-mode')
  }

  function setDarkMode() {
    document.body.classList.add('dark-mode')
    document.body.classList.remove('light-mode')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
