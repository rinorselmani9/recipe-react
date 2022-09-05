import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import styles from './SingleRecipe.module.scss'
import { useSelector } from 'react-redux'
import DisplayRecipe from '../../Components/DisplayRecipe/DisplayRecipe'
import api from '../../lib/api'
import endpoint from '../../lib/endpoint'

const SingleRecipe = () => {

  const token = useSelector((state)=>state.auth.data.token) 
  const navigate = useNavigate()
  const recipeId = useParams().id
  const [recipe, setRecipe] = useState([])
  const [errorMessage, setErrorMessage] = useState()
  const [variant, setVariant] = useState('danger')
  const [modal, setModal] = useState(false)

  const config = {
    headers:{
        Authorization:`Bearer ${token}`
    },
    params:[recipeId]
  }

  useEffect(() => {
    const getOneRecipe = async () => {
      try {
        const result = await axios.get(`${process.env.REACT_APP_API_URL}/recipe/single/${recipeId}`)
        if (!result.success) {
          setErrorMessage(result.data)
        }
        setRecipe([result.data.data])
      } catch (err) {
        setErrorMessage(err.message)
      }
    }
    getOneRecipe()
    setVariant('success')
  }, [recipeId])

  const deleteRecipe = async() => {
   
    const result = await api.call(endpoint.deleteRecipe, config)

    if(!result.success){
      setErrorMessage(result.data)
    }
    navigate('/profile')
  }
  const deleteRecipeNegative = () => {
    navigate('/profile')
  }
  

  return (
    <div>
      {modal && modal ? (
        <div>
          <h4>Are you sure you want to delete this recipe?</h4>
          <button onClick={deleteRecipe}>Yes</button>
          <button onClick={deleteRecipeNegative}>No</button>
        </div>
      ) : (
        <DisplayRecipe recipe={recipe} modal={setModal} />
      )}
    </div>
  )
}

export default SingleRecipe
