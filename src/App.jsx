import './App.css'
import { useAuth0 } from '@auth0/auth0-react'
import Api_data from './components/Api_data'
import Login from './components/Login'
import Logout from './components/Logout'

function App() {
  const { isAuthenticated } = useAuth0()

  return (
    <div className="App">
      {
        isAuthenticated ? <>

          <Logout />
          <Api_data />
        </>
          :
          <Login />
      }
    </div>
  )
}

export default App
