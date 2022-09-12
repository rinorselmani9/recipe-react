import React, { useState,  } from 'react'
import { Form } from 'react-bootstrap'
import styles from './EditUser.module.scss'

const EditUser = ({ user, submit, setMessage, changeImage }) => {
  // const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  

  const [firstName, setFirstName] = useState(user.firstName)
  const [lastName, setLastName] = useState(user.lastName)
  // const [email, setEmail] = useState(user.email)
  const [age, setAge] = useState(user.age)
  // const [image, setImage] = useState(user.image)

  const submitHandler = (e) => {
    e.preventDefault()

    if (!firstName) {
      setMessage('First name can not be empty')
    }
    if (!lastName) {
      setMessage('Last name can not be empty')
    }
    if (!age) {
      setMessage('Age can not be empty')
    }
    if (age < 0) {
      setMessage('Age has to be greater than 1')
    }

    const data = {
      firstName,
      lastName,
      age,
    }
    submit(data)
  }
  

  return (
    <Form onSubmit={submitHandler} className={styles.form}>
      <Form.Group>
        <input
          type='text'
          value={firstName}
          placeholder='Enter your first name...'
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <input
          type='text'
          value={lastName}
          placeholder='Enter your last name...'
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <input
          type='number'
          value={age}
          placeholder='Enter your age...'
          onChange={(e) => setAge(e.target.value)}
        />
      </Form.Group>
      
      <button>Edit</button>
    </Form>
  )
}

export default EditUser
