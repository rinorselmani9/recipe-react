import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoutes = ({ role, children }) => {
  const auth = useSelector((state) => state.auth.data)

  if (!auth) {
    return <Navigate to='/login' />
  }

  if (auth.role !== role) {
    if (role === 'ADMIN') {
        return <Navigate to='/profile' />
    } else {
        return <Navigate to='/dashboard' />
    }
  }

  return <div className={role}>{children}</div>
}

export default PrivateRoutes
