import React from 'react'
import styles from './Dashboard.module.scss'

const Dashboard = () => {
  return <div className={styles.container}>
    <div className={styles.recipes}>Total recipes:50</div>
    <div className={styles.users}>Total users:10</div>
  </div>
}

export default Dashboard
