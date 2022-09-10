import React, { useState } from 'react'
import LoginForm from '../../Components/Forms/LoginForm/Login'
import api from '../../lib/api'
import endpoint from '../../lib/endpoint'
import SharedAlert from '../../Components/shared/Alert'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { login } from '../../lib/store/slice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [errorMessage, setErrorMessage] = useState()
  const [variant, setVariant] = useState('danger')

  const submitHandler = async (data) => {
    const config = {
      data,
    }
    const result = await api.call(endpoint.login, config)

    if (!result.success) {
      setErrorMessage([result.data])
      return
    }
    setVariant('success')
    dispatch(login(result.data))
    navigate('/')
  }

  return (
    <>
      <Container>
        <h1>Login</h1>
        <SharedAlert variant={variant}>{errorMessage}</SharedAlert>
      </Container>
      <LoginForm setMessage={setErrorMessage} submit={submitHandler} />
    </>
  )
}

export default Login
