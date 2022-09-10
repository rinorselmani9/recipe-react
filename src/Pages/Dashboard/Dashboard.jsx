import React from 'react'
import styles from './Dashboard.module.scss'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.recipes}>
        <Link to='/recipes-dashboard'>
          <h4>Recipes Dashboard</h4>
          <img src='/recipe.jpg'></img>
        </Link>
      </div>

      <div  className={styles.users}>
        <Link to='/users-dashboard'>
          <h4>Users Dashboard</h4>
          <img src='/users.jpg'></img>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard
