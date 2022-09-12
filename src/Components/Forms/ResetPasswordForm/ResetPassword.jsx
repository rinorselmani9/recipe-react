import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import styles from './ResetPassword.module.scss'

const ResetPassword = ({ submit, setMessage }) => {
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!password) {
      setMessage('Please enter a passoword!')
      return
    }
    if (confirmPassword !== password) {
      setMessage('Passwords do not match!')
      return
    }
    const data = {
      password,
    }
    submit(data)
  }

  return (
    <Form onSubmit={handleSubmit} className={styles.form}>
      <Form.Group>
        <input
          type='password'
          placeholder='Enter your password...'
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </Form.Group>
      <Form.Group>
        <input
          type='password'
          placeholder='Enter confirm password...'
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
      </Form.Group>
      <button>Submit</button>
    </Form>
  )
}

export default ResetPassword
