import React, { createContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
    } catch {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    } catch {
      // Silently fail if localStorage is not available
    }
    
    const root = document.documentElement

    // Add smooth transition wrapper
    root.classList.add('theme-transition')

    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    // Remove the helper class after the transition completes
    const timeoutId = window.setTimeout(() => {
      root.classList.remove('theme-transition')
    }, 500)

    return () => window.clearTimeout(timeoutId)
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(prev => !prev)
  }

  const setTheme = (theme) => {
    setIsDark(theme === 'dark')
  }

  const value = {
    isDark,
    toggleTheme,
    setTheme,
    theme: isDark ? 'dark' : 'light'
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

// Export the context for use in the hook
export { ThemeContext }
