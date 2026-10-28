import { useEffect, useState } from 'react'
import { ThemeContext } from './ThemeContext'

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('portfolio-theme') || 'dark'
    } catch {
      return 'dark'
    }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme

    try {
      localStorage.setItem('portfolio-theme', theme)
    } catch {
      // The theme still works if browser storage is unavailable.
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => current === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}