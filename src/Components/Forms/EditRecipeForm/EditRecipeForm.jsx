import React, { useState } from 'react'
import {  Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styles from './EditRecipeForm.module.scss'

const EditRecipeForm = ({ submit, setMessage, recipe }) => {


  const token = useSelector((state) => state.auth.data.token)
  console.log(recipe);
  const [title, setTitle] = useState(recipe.title)
  const [category, setCategory] = useState(recipe.category)
  const [ingridients, setIngridients] = useState()
  const [instructions, setInstructions] = useState(recipe.instructions)
  const [image, setImage] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    if (!title) {
      setMessage('Please enter a title for your recipe!')
    }
    if (!category) {
     setMessage('Please enter a category for your recipe!')
    }
    if (!ingridients) {
      setMessage('Please enter some ingridients for your recipe!')
    }
    if (!instructions) {
      setMessage('Please enter instructions for your recipe!')
    }
    if (!image) {
      setMessage('Please enter an image for your recipe!')
    }

    const data = {
      title,
      category,
      ingridients,
      instructions,
      image,
    }
    submit(data)
  }

  return (
   
    <Form onSubmit={submitHandler} className={styles.form}>
      <Form.Group>
        <input
          type='text'
          value={title}
          placeholder='Recipe Title'
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </Form.Group>
      <Form.Group>
        <input
          type='text'
          value={category}
          placeholder='Recipe Category'
          onChange={(e) => setCategory(e.target.value)}
        ></input>
      </Form.Group>
      <Form.Group>
        <textarea
          type='text'
          placeholder='Recipe ingridients'
          onChange={(e) => setIngridients(e.target.value)}
        ></textarea>
      </Form.Group>
      <Form.Group>
        <textarea
          value={instructions}
          placeholder='Recipe instructions'
          onChange={(e) => setInstructions(e.target.value)}
        ></textarea>
      </Form.Group>
      <Form.Group>
        <input type='text' placeholder='Image' onChange={(e) => setImage(e.target.value)}></input>
      </Form.Group>
      <button>Edit!</button>
    </Form>
    
  )
}

export default EditRecipeForm
