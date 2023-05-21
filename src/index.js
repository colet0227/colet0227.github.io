import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './contexts/theme';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);





// import { createRoot } from 'react-dom/client';
// import App from './App';

// const root = document.getElementById('root');
// createRoot(root).render(<App />);

