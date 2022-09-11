import React, { useState, useEffect } from 'react'
import ResetPasswordForm from '../../Components/Forms/ResetPasswordForm'
import { Container } from 'react-bootstrap'
import SharedAlert from '../../Components/shared/Alert'
import { useLocation, Link } from 'react-router-dom'
import api from '../../lib/api'
import endpoint from '../../lib/endpoint'

const ResetPassword = () => {
  
  const location = useLocation()
  const [errorMessage, setErrorMessage] = useState()
  const [token, setToken] = useState()
  const [variant, setVariant] = useState('danger')

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    setToken(params.get('token'))
  })

  const submitHandler = async (data) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    }

    const result = await api.call(endpoint.resetPassword, config)

    if (!result.success) {
      setErrorMessage(result.data)
      return
    }
    setVariant('success')
    setErrorMessage('Your password has been successfully  changed')
  }

  return (
    <>
      <Container>
        <h1>Reset Password</h1>
        <SharedAlert variant={variant}>{errorMessage}</SharedAlert>
      </Container>
      {variant !== 'success' ? (
        <ResetPasswordForm setMessage={setErrorMessage} submit={submitHandler} />
      ) : (
        <Container>
          <button>
            <Link to='/login'>Please go to login!</Link>
          </button>
        </Container>
      )}
    </>
  )
}

export default ResetPassword
