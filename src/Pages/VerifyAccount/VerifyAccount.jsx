import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import endpoint from '../../lib/endpoint'
import api from '../../lib/api'

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

  return <div>
    <h2>Your account has been succesfully verified.Please navigate to login!</h2>
    <Link to='/login'>Go to Login page!</Link>
  </div>
}

export default VerifyAccount
