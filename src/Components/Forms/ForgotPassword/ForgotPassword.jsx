import React,{useState} from 'react'
import { Form } from 'react-bootstrap'
import styles from './ForgotPassword.module.scss'

const ForgotPassword = ({ submit, setMessage }) => {
  const [email, setEmail] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email) {
      setMessage('Please enter an email!')
      return
    }
    const data = {
      email,
    }
    submit(data)
  }

  return (
    <Form onSubmit={handleSubmit} className={styles.form}>
      <Form.Group>
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder='Enter your email...'
        ></input>
      </Form.Group>
      <button>Send</button>
    </Form>
  )
}

export default ForgotPassword
