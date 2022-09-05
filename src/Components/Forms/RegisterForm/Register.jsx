import React, { useState } from 'react'
import styles from './Register.module.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import { Col, Container, Form, Row } from 'react-bootstrap'

const Register = ({ submit, setMessage }) => {
  const navigate = useNavigate()

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const passwordRegex =
    /^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{8,}$/

  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [image, setImage] = useState()

  const submitHandler = (e) => {
    e.preventDefault()

    const localErrors = []
    setMessage('')

    if (!firstName) {
      localErrors.push('First name can not be empty')
    }
    if (!lastName) {
      localErrors.push('Last name can not be empty')
    }
    if (!emailRegex.test(email)) {
      localErrors.push('Email is not valid')
    }
    if (!age) {
      localErrors.push('Age can not be empty')
    }
    if (age < 0) {
      localErrors.push('Age has to be greater than 1')
    }
    if (!passwordRegex.test(password)) {
      localErrors.push('Password must contain an UpperCase Letter and a symbol')
    }
    if (confirmPassword !== password) {
      localErrors.push('Passwords do not match')
    }

    if (localErrors.length) {
      setMessage(localErrors[0])
      return
    }

    const data = {
      firstName,
      lastName,
      email,
      age,
      password,
      image
    }
    submit(data)
  }

  return (
          <Form onSubmit={submitHandler} className={styles.form}>
            <Form.Group>
              <input
                type='text'
                placeholder='Enter your first name...'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <input
                type='text'
                placeholder='Enter your last name...'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <input
                type='email'
                placeholder='Enter your email...'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <input
                type='number'
                placeholder='Enter your age...'
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <input
                type='password'
                placeholder='Enter your password...'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <input
                type='password'
                placeholder='Enter confirm password...'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <input
                type='text'
                placeholder='Profile Pictue'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>
            <button>Register</button>
            <p>
              Already have an account?<NavLink to='/login'>Login</NavLink>
            </p>
          </Form>
  )
}

export default Register
