import React from 'react'
import { Alert } from 'react-bootstrap'

const AuthAlert = ({ variant, children }) => {
  return <>{children && <Alert variant={variant}>{children}</Alert>}</>
}

export default AuthAlert
