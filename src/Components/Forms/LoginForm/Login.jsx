import React from 'react'
import { useState } from 'react'
import styles from './Login.module.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'

const Login = ({ submit, setMessage }) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  const submitHandler = async (e) => {
    e.preventDefault()

    const localErrors = []
    setMessage('')

    if (!emailRegex.test(email)) {
      localErrors.push('Email is not valid!')
    }
    if (!password) {
      localErrors.push('Password can not be empty!')
    }

    if (localErrors.length) {
      setMessage(localErrors[0])
      return
    }

    const data = {
      email,
      password,
    }
    submit(data)
  }

  return (
          <Form onSubmit={submitHandler} className={styles.form}>
            <Form.Group>
              <input
                type='text'
                placeholder='Enter your email...'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </Form.Group>
            <Form.Group>
              <input
                type='password'
                placeholder='Enter your password...'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </Form.Group>
            <p className={styles.forgot}>
              <NavLink to='/forgot-password'>Forgot Password?</NavLink>
            </p>
            <button>Log In</button>
            
            <p>
              Don't have an account?<NavLink to='/register'>Register now!</NavLink>
            </p>
          </Form>
  )
}

export default Login
