import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

const Login = () => {
    const{loginWithRedirect}= useAuth0();
  return (
    <div className='container_login'>
        <h1 className='principal_login'>Enterate de todos los cambios de tus cripto-moneda</h1>
        <p className='p_login'>En Tiempo Real</p>
        <h2 className='title_login'>update currency</h2>
        <button className='login_btn' onClick={()=>loginWithRedirect()}>Login</button>
    </div>
  )
}

export default Login