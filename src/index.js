import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './contexts/theme';
import App from './App';

const root = document.getElementById('root');
createRoot(root).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);