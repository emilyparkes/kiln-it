import React from 'react'

import { logOut } from '../../apis/firebase/auth'

function LogOut ({ className, setSidebar }) {
  const logOutUser = () => {
    logOut()
      .then(message => console.log(message))
      .catch(err => console.log(err.message))
    setSidebar()
  }

  return (
    <div className={className} onClick={logOutUser}>Log Out</div>
  )
}

export default LogOut
