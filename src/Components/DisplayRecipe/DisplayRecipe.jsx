import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from './DisplayRecipe.module.scss'
import RatingSelect from '../Forms/RatingForm/RatingSelect'

const DisplayRecipe = ({ recipe, modal, ratingSystem }) => {
  const auth = useSelector((state) => state.auth.data)
  const [info, setInfo] = useState(false)
  const navigate = useNavigate()

  const showInstructions = () => {
    setInfo(true)
  }
  const showIngridient = () => {
    setInfo(false)
  }

  const handleEdit = (id) => {
    navigate(`/edit-recipe/${id}`)
  }

  const handleDelete = () => {
    modal(true)
  }
  const handleRating = (rate) => {
    ratingSystem(rate)
  }
  let avgRating
  return (
    <>
      {recipe.map((elem) => {
        return (
          <div key={elem._id} className={styles.recipe}>
            <h1>{elem.title}</h1>
            <div>
              <div className={styles.controll}>
                <img src={process.env.REACT_APP_API_URL + elem.image}></img>
                {auth.id && auth.id === elem.creator ? (
                  <div key={elem._id}>
                    <button
                      onClick={() => {
                        handleEdit(elem._id)
                      }}
                    >
                      Edit Recipe
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(elem._id)
                      }}
                    >
                      Delete Recipe
                    </button>
                  </div>
                ) : null}
              </div>
              <div className={styles.info}>
                <div>
                  <button onClick={showIngridient}>Ingridients</button>
                  <button onClick={showInstructions}>Instructions</button>
                </div>
                {info === false ? (
                  <ul>
                    {elem.ingridients.map((ingridient, index) => {
                      return <li key={index}>{ingridient}</li>
                    })}
                  </ul>
                ) : (
                  <p>{elem.instructions}</p>
                )}
                {elem.rating.length
                  ? (avgRating = (
                      <h4>
                        Rating:
                        {elem.rating.reduce((prev, curr) => prev + curr, 0) / elem.rating.length}/5
                      </h4>
                    ))
                  : null}

                {auth.id && auth.id !== elem.creator ? (
                  <RatingSelect handleRating={handleRating} />
                ) : null}
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default DisplayRecipe
