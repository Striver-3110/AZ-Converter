import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CurrencyProvider from './context/CurrencyContext.jsx';
import App from './App.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CurrencyProvider>
    <App />
    </CurrencyProvider>
  </StrictMode>,
)
