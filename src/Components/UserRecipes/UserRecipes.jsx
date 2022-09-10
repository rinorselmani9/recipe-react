import React from 'react'
import styles from './UserRecipes.module.scss'
import { Link, useNavigate } from 'react-router-dom'


const UserRecipes = (props) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/add-recipe')
  }
  return (
    <>
      <div  className={styles.heading}>
      <h1>Recipes</h1>
      <button onClick={handleClick}>Add recipe</button>
      </div>
      <div className={styles.container}>
        {props.recipesList.map((recipe) => {
          return (
            <div key={recipe._id}>
              <Link to={`/recipe/single/${recipe._id}`}>
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

export default UserRecipes
