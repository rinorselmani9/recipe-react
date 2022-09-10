import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import styles from './AddRecipe.module.scss'

const AddRecipe = ({ submit, setMessage }) => {
  const [title, setTitle] = useState()
  const [category, setCategory] = useState()
  const [ingridients, setIngridients] = useState([''])
  const [instructions, setInstructions] = useState()
  const [image, setImage] = useState('')

  const auth = useSelector((state) => state.auth.data)

  const addIngridientInput = (e) => {
    e.preventDefault()
    let ingridientInput = ''
    setIngridients([...ingridients, ingridientInput])
    console.log(ingridients);
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (!title) {
      return setMessage('Please enter a title for your recipe!')
    }
    if (!category) {
      return setMessage('Please enter a category for your recipe!')
    }
    if (!ingridients) {
      return setMessage('Please enter some ingridients for your recipe!')
    }
    if (!instructions) {
      return setMessage('Please enter instructions for your recipe!')
    }
    if (!image) {
      return setMessage('Please enter an image for your recipe!')
    }
    console.log(ingridients);
    const data = {
      title,
      category,
      ingridients,
      instructions,
      image,
      creator: auth.id,
    }
    submit(data)
  }

  return (
    <Container>
      <Form onSubmit={submitHandler} className={styles.form}>
        <Form.Group>
          <input
            type='text'
            placeholder='Recipe Title'
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </Form.Group>
        <Form.Group>
          <input
            type='text'
            placeholder='Recipe Category'
            onChange={(e) => setCategory(e.target.value)}
          ></input>
        </Form.Group>

        {ingridients.map((input, index) => {
          return (
          <Form.Group>
            <input
              type='text'
              placeholder={`Recipe ingridients ${index+1} `}
              onChange={( event ) => {
                let multipleInputs = [...ingridients]
                multipleInputs[index] = event.target.value
                setIngridients(multipleInputs)
                console.log(ingridients);
              }}
            ></input>
          </Form.Group>
          )
        })}
        <button onClick={addIngridientInput}>Add Ingridient</button>

        <Form.Group>
          <textarea
            placeholder='Recipe instructions'
            onChange={(e) => setInstructions(e.target.value)}
          ></textarea>
        </Form.Group>
        <Form.Group>
          <input type='text' placeholder='Image' onChange={(e) => setImage(e.target.value)}></input>
        </Form.Group>
        <button>Add recipe!</button>
      </Form>
    </Container>
  )
}

export default AddRecipe
