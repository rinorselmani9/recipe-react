import React, { useState, useRef } from 'react'
import { Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import styles from './EditRecipeForm.module.scss'

const EditRecipeForm = ({ submit, setMessage, recipe, changeImage }) => {
  const [image] = useState(recipe.image)
  const fileRef = useRef(null)

  const [title, setTitle] = useState(recipe.title)
  const [category, setCategory] = useState(recipe.category)
  const [ingridients, setIngridients] = useState(recipe.ingridients)
  const [instructions, setInstructions] = useState(recipe.instructions)

  const addIngridientInput = (e) => {
    e.preventDefault()
    let ingridientInput = ''
    setIngridients([...ingridients, ingridientInput])
  }

  const handleChangeImage = (e) => {
    e.preventDefault()
    changeImage(fileRef.current.files[0])
  }

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
    const data = {
      title,
      category,
      ingridients,
      instructions,
    }
    submit(data)
  }

  return (
    <Form onSubmit={submitHandler} className={styles.form} encType="multipart/form-data">
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
      {ingridients.map((input, index) => {
        return (
          <Form.Group>
            <input
              type='text'
              value={ingridients}
              placeholder={`Recipe ingridients ${index + 1} `}
              onChange={(event) => {
                let multipleInputs = [...ingridients]
                multipleInputs[index] = event.target.value
                setIngridients(multipleInputs)
                console.log(ingridients)
              }}
            ></input>
          </Form.Group>
        )
      })}
      <button onClick={addIngridientInput}>Add Ingridient</button>
      <Form.Group>
        <textarea
          value={instructions}
          placeholder='Recipe instructions'
          onChange={(e) => setInstructions(e.target.value)}
        ></textarea>
      </Form.Group>
      <div>
        {/* <img src={image.startsWith('http') ? image : process.env.REACT_APP_API_URL + image} /> */}
        <input ref={fileRef} type='file' onChange={handleChangeImage} name='recipe-image' />
      </div>
      <button>Edit!</button>
    </Form>
  )
}

export default EditRecipeForm
