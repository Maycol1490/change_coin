import React from 'react'
import ReactDOM from 'react-dom/client'
import {Auth0Provider} from '@auth0/auth0-react'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider domain='maycol1490.us.auth0.com' clientId='r7YRr9m8Ulg1L1uQClSeiTN9JvYhdU6a' redirectUri={window.location.origin}>
    <App />
    </Auth0Provider>
  </React.StrictMode>
)
