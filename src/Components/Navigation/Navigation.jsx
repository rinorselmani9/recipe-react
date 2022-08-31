import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.scss'

const Navigation = () => {
  return (
    <ul className={styles.nav}>
    <li >
        <NavLink to='/'>Home</NavLink>
    </li>
    <li>    
        <NavLink to='/dashboard'>Dashboard</NavLink>
    </li>    
    <li>    
        <NavLink to='/login'>Login</NavLink>
    </li>
    </ul>
  )
}

export default Navigation