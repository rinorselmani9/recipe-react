import React from 'react'
import LoginForm  from '../../Components/LoginForm/Login'
import api from '../../lib/api'
import endpoint from '../../lib/endpoint'

const Login = () => {

  const submitHandler = async(data) => {
    const config = {
      data
    }
    const result = await api.call(endpoint.login,config)
    console.log(result);
  }


  return (
    <LoginForm submit={submitHandler}/>
  )
}

export default Login