import React, { useState } from 'react'
import RegisterForm from '../../Components/Forms/RegisterForm'
import api from '../../lib/api'
import endpoint from '../../lib/endpoint'
import { Container } from 'react-bootstrap'
import SharedAlert from '../../Components/shared/Alert'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState()
  const [variant,setVariant] = useState('danger')

  const handleSubmit = async (profile) => {
    // const config = {
    //   data,
    // }
    let formData = new FormData()
    formData.append('firstName', profile.firstName)
    formData.append('lastName', profile.lastName)
    formData.append('email', profile.email)
    formData.append('age', profile.age)
    formData.append('password', profile.password)
    formData.append('profile-image', profile.image)
    
    const config = {
      headers:{
        'Content-type': 'multipart/form-data'
      },
      data:formData
    }
    console.log(profile);

    const result = await api.call(endpoint.register, config)
    if (!result.success) {
      setErrorMessage(result.data)
    }
    setVariant('success')
  }

  return (
    <>
      <Container>
        <h1>Register</h1>
        {/* <SharedAlert variant={variant}>{errorMessage}</SharedAlert> */}
      </Container>
      {variant !== 'success' ? (<RegisterForm setMessage={setErrorMessage} submit={handleSubmit} />
      ):(
        <Container>
          <h4>Registered successfully</h4>
          <h4>An email has been sent to you to verify your account!</h4>
          <h4>After verifying your account you'll be redirectet to login page</h4>
        </Container>
      )
    }
      
    </>
  )
}

export default Register
