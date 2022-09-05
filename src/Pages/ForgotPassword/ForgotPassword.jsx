import React from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import SharedAlert from '../../Components/shared/Alert'
import ForgotPasswordForm from '../../Components/Forms/ForgotPassword'
import api from '../../lib/api'
import endpoint from '../../lib/endpoint'

const ForgotPassword = () => {
  const [errorMessage, setErrorMessage] = useState()
  const [variant, setVariant] = useState('danger')

  const submitHandler = async (data) => {
    const config = {
      data,
    }
    const result = await api.call(endpoint.forgotPassword, config)

    if (!result.success) {
      setErrorMessage(result.data)
      return
    }
    setVariant('success')
  }

  return (
    <>
      <Container>
        <h1>Forgot-Password</h1>
        <SharedAlert variant={variant}>{errorMessage}</SharedAlert>
      </Container>
      {variant !== 'success' ? (<ForgotPasswordForm submit={submitHandler} setMessage={setErrorMessage} />
      ):(
        <Container>
          <h4>An email has been sent to you!<br></br>Check there for furthter instructions</h4>
        </Container>
      )}
      
    </>
  )
}

export default ForgotPassword
