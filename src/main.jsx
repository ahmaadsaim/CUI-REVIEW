import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="426636075250-0dnvi6i7h7ei2b8u2qaqpd65j33v2i6t.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
