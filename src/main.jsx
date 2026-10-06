// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/global.css'
import App from './App.jsx'
import Layout from './layouts/Layout.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Layout>
      <App />
    </Layout>,
  // </StrictMode>
)
