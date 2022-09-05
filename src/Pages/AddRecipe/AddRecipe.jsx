import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import AddRecipeForm from '../../Components/Forms/AddRecipeForm/AddRecipe'
import SharedAlert from '../../Components/shared/Alert'
import api from '../../lib/api'
import endpoint from '../../lib/endpoint'
import { useNavigate } from 'react-router-dom'

const AddRecipe = () => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState()
  const [variant,setVariant] = useState('danger')

  const handleSubmit = async (data) => {
    const config = {
      data,
    }

    const result = await api.call(endpoint.addRecipe, config)
    if (!result.success) {
      setErrorMessage(result.data)
    }
    setVariant('success')
    setTimeout(() => {
      navigate('/profile')
    },2000)
  }

  return (
    <>
      <Container>
        <h2>Add Recipe</h2>
        <SharedAlert variant={variant}>{errorMessage}</SharedAlert>
      </Container>
      {variant !== 'success' ? (<AddRecipeForm submit={handleSubmit} setMessage={setErrorMessage} />
      ):(
        <h4>Added succesfully</h4>
      )}
      
    </>
  )
}

export default AddRecipe
