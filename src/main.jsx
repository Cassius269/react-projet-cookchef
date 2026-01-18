import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/App.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { StrictMode } from 'react';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
