import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/style/index.css'
import App from './cmps/App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
