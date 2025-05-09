import { createContext, useEffect } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  // Force light theme
  useEffect(() => {
    // Remove any existing theme classes and add light
    document.body.classList.remove('dark');
    document.body.classList.add('light');
  }, []);
  
  // No-op toggle function to avoid breaking any existing code
  const toggleTheme = () => {
    // Do nothing - only light theme is supported now
  };
  
  return (
    <ThemeContext.Provider value={{ themeName: 'light', toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }