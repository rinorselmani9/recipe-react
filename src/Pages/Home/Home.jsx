import React, { useState, useEffect } from 'react'
import api from '../../lib/api'
import endpoint from '../../lib/endpoint'
import { Link } from 'react-router-dom'
import styles from './Home.module.scss'
import SearchBar from '../../Components/SearchBar/SearchBar'
import CategoryFilter from '../../Components/CategoryFilter'

const Home = () => {
  const [recipesList, setRecipesList] = useState([])
  const [completeRecipes, setCompleteRecipes] = useState([])
  const [errorMessage, setErrorMessage] = useState()

  useEffect(() => {
    const getAllRecipes = async () => {
      try {
        const result = await api.call(endpoint.getAllRecipes)
        if (!result.success) {
          setErrorMessage(result.data)
        }
        setRecipesList(result.data)
        setCompleteRecipes(result.data)
      } catch (err) {
        setErrorMessage(err.message)
      }
    }
    getAllRecipes()
  }, [])

  const filterSearch = (searchQuery) => {
    if (!filterSearch) {
      setRecipesList(completeRecipes)
      return
    }
    const filteredSearch = recipesList.filter((elem) =>
      elem.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setRecipesList(filteredSearch)
  }

  const filterCategory = (categoryFilter) => {
    if (!filterCategory) {
      setRecipesList(completeRecipes)
      return
    }
    const filteredCategory = recipesList.filter((elem) => 
      elem.category.toLowerCase().includes(categoryFilter.toLowerCase())
    )
    setRecipesList(filteredCategory)
  }

  return (
    <>
      <div className={styles.filterSearch}>
        <SearchBar filterSearch={filterSearch} />
        <CategoryFilter filterCategory={filterCategory}/>
      </div>  
      <div className={styles.container}>  
        {recipesList.map((recipe) => {
          return (
            <div key={recipe._id}>
              <Link to={`/recipe/single/${recipe._id}`}>
                <p>{recipe.title}</p>
                <img src={process.env.REACT_APP_API_URL+recipe.image} alt='recipe'></img>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Home
