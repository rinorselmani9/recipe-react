import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import endpoint from '../../lib/endpoint'
import api from '../../lib/api'
import {Container} from 'react-bootstrap'

const VerifyAccount = () => {
  const location = useLocation()
  useEffect(() => {
    const verifyAccount = async () => {
      
      const params = new URLSearchParams(location.search)
      const token = params.get('token')
      const config = {
        headers: {
          Authorization:`Bearer ${token}`,
        },
      }

      const result = await api.call(endpoint.verifyAccount, config)

      console.log(result)
    }
    verifyAccount()
  }, [location.search])

  return <Container>
    <h4>Your account has been succesfully verified.<br></br>Please navigate to login!</h4>
    <Link to='/login'>Log in now!</Link>
  </Container>
}

export default VerifyAccount
