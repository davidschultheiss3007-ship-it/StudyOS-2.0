import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css';
import './styles/utilities.css';
import 'katex/dist/katex.min.css';
import App from './App.jsx';
import { initTheme } from './app/theme.js';

initTheme();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
