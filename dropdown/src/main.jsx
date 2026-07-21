import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseProvider from './context/userProvider.jsx';

createRoot(document.getElementById('root')).render(
  <UseProvider>
    <App />
  </UseProvider>
);