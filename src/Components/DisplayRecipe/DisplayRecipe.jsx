import React,{useState} from 'react'
import {useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from './DisplayRecipe.module.scss'

const DisplayRecipe = ({recipe, modal}) => {
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
  return (
  <>
    {recipe.map((elem) => {
        return (
          <div key={elem._id} className={styles.recipe}>
            <h1>{elem.title}</h1>
            <div>
              <div className={styles.controll}>
                <img src={elem.image}></img>
                {auth.id && auth.id === elem.creator ? (
                  <div>
                    <button onClick={() => {handleEdit(elem._id)}}>Edit Recipe</button>
                    <button onClick={() => {handleDelete(elem._id)}}>Delete Recipe</button>
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
                    {elem.ingridients.map((ingridient) => {
                      return <li>{ingridient}</li>
                    })}
                  </ul>
                ) : (
                  <p>{elem.instructions}</p>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default DisplayRecipe