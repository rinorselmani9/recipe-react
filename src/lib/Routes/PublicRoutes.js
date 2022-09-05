import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PublicRoutes = ({ role, children }) => {
  const auth = useSelector((state) => state.auth.data)
  console.log(auth);

  if (auth) {
    if (auth.role === 'ADMIN') {
        return <Navigate to='/dashboard'/>
    } else {
        return <Navigate to='/profile'/>
    }
  }

  return <div className={role}>{children}</div>
}

export default PublicRoutes
