import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import styles from './RatingSelect.module.scss'

const RatingSelect = ({handleRating}) => {
  const [selected, setSelected] = useState()
  const handleChange = (e) => {
    setSelected(+e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    handleRating(selected)
  }

  return (
    <Form onSubmit={submitHandler}>
        <ul className={styles.rating}>
      <li>
        <input type='radio' id='num1' name='rating' onChange={handleChange} value='1' checked={selected === 1} />
        <label htmlFor='num1'>1</label>
      </li>
      <li>
        <input type='radio' id='num2' name='rating' onChange={handleChange}  value='2' checked={selected === 2} />
        <label htmlFor='num2'>2</label>
      </li>
      <li>
        <input type='radio' id='num3' name='rating' onChange={handleChange}  value='3' checked={selected === 3} />
        <label htmlFor='num3'>3</label>
      </li>
      <li>
        <input type='radio' id='num4' name='rating' onChange={handleChange}  value='4' checked={selected === 4} />
        <label htmlFor='num4'>4</label>
      </li>
      <li>
        <input type='radio' id='num5' name='rating' onChange={handleChange}  value='5' checked={selected === 5} />
        <label htmlFor='num5'>5</label>
      </li>
      </ul>
      <button className={styles.submit}>Rate</button>
    </Form>
  )
}

export default RatingSelect
