import React, { useState } from 'react'
import EditRecipeForm from '../../Components/Forms/EditRecipeForm'
import SharedAlert from '../../Components/shared/Alert'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import api from '../../lib/api'
import endpoint from '../../lib/endpoint'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const EditRecipe = () => {
  let recipeId = useParams().id
  const [recipe, setRecipe] = useState()

  const [errorMessage, setErrorMessage] = useState()

  const [variant, setVariant] = useState('danger')

  const token = useSelector((state) => state.auth.data.token)

  const navigate = useNavigate()

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: [recipeId],
  }

  useEffect(() => {
    const getOneRecipe = async () => {
      const result = await api.call(endpoint.getOneRecipe, config)
      setRecipe(result.data)
    }
    getOneRecipe()
  }, [recipeId])

  const editHandler = async (data) => {
    const editConfig = { ...config }
    editConfig.data = data
    const result = await api.call(endpoint.editRecipe, editConfig)

    if (!result.success) {
      setErrorMessage(result.data)
    }

    
  }
  const changeImage = async (file) => {
    const formData = new FormData()
    formData.append('recipe-image', file)
    const editConfig = {...config}
    editConfig.data = formData

    try {
      await api.call(endpoint.editRecipeImage, editConfig) 
      setVariant('success')
      navigate('/profile')
    } catch (err) {
      setErrorMessage(err.message)
    }

  }

  return (
    <>
      <Container>
        <h2>Edit Recipe</h2>
        <SharedAlert variant={variant}>{errorMessage}</SharedAlert>
      </Container>
      {recipe && (
        <EditRecipeForm
          recipe={recipe}
          submit={editHandler}
          setMessage={setErrorMessage}
          changeImage={changeImage}
        />
      )}
    </>
  )
}

export default EditRecipe
