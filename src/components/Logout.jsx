import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
const Logout = () => {
    const {user,logout} = useAuth0();
  return (
    <div className='container_logout'>
      <h3 className='user_logout'>Usuario: <span>{user?.name}</span></h3>
        <button className='logout_btn' onClick={()=>logout({returnTo:window.location.origin})}>
            logout
        </button>
    </div>
  )
}

export default Logout