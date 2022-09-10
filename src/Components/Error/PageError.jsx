import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './PageError.module.scss'

const PageError = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

  return (
    <div className={styles.error}>
        <h2>OOPS!</h2>
        <h4>404 Not Found!</h4>
        <p>The page you are looking for doesn't exist or might have been removed!</p>
        <button onClick={handleClick}>Home Page</button>
    </div>
  )
}

export default PageError