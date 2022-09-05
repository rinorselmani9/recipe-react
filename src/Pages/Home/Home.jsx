import React, { useState, useEffect } from 'react'
import api from '../../lib/api'
import endpoint from '../../lib/endpoint'
import { Link } from 'react-router-dom'
import styles from './Home.module.scss'

const Home = () => {
  const [recipesList, setRecipesList] = useState([])
  const [errorMessage, setErrorMessage] = useState()

  useEffect(() => {
    const getAllRecipes = async () => {
      try {
        const result = await api.call(endpoint.getAllRecipes)
        if (!result.success) {
          setErrorMessage(result.data)
        }
        setRecipesList(result.data)
      } catch (err) {
        setErrorMessage(err.message)
      }
    }
    getAllRecipes()
    console.log(recipesList)
  }, [])

  return (
    <>
      <div className={styles.container}>
      {recipesList.map((recipe) => {
        return (
          <div key={recipe.id}>
            <Link to={`/recipe/${recipe._id}`}>
              <p>{recipe.title}</p>
              <img src={recipe.image}></img>
            </Link>
          </div>
        )
      })}
      </div>
    </>
  )
}

export default Home
