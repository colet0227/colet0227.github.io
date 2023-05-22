import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(() => localStorage.getItem('themeName') || 'light')

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    const initialTheme = darkMediaQuery.matches ? 'dark' : 'light';
    setThemeName(initialTheme);
  
    // Add initial theme class to body
    document.body.classList.add(initialTheme);
  
    darkMediaQuery.addEventListener('change', (e) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setThemeName(newTheme);
  
      // Remove old theme class from body and add new theme class
      document.body.classList.remove('light', 'dark');
      document.body.classList.add(newTheme);
    });
  }, []);
  
  const toggleTheme = () => {
    const newTheme = themeName === 'dark' ? 'light' : 'dark';
    localStorage.setItem('themeName', newTheme);
    setThemeName(newTheme);
  
    // Remove old theme class from body and add new theme class
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(newTheme);
  };
  
  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }