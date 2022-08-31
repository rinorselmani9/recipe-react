import React from 'react'
import styles from './Register.module.scss'
import RegisterForm from '../../Components/RegisterForm'
import api from '../../lib/api'
import endpoint from '../../lib/endpoint'

const Register = () => {

  const handleSubmit = async(data) => {
    

    const config = {
      data,
    }

    const result = await api.call(endpoint.register,config)
    console.log(result);
  }

  return (
    <RegisterForm submit={handleSubmit}/>
  )
}

export default Register