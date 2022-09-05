import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import MiniCard from '../MiniCard/MiniCard'

const Navigation = () => {
  const auth = useSelector((state) => state.auth.data)

  return (
    <ul className={styles.nav}>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>{auth && auth.role === 'ADMIN' ? <NavLink to='/dashboard'>Dashboard</NavLink> : null}</li>
      <li>{!auth && <NavLink to='/login'>Login</NavLink>}</li>

      <li>{auth && <MiniCard />}</li>
    </ul>
  )
}

export default Navigation
