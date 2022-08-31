import Navigation from '../Navigation'
import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
          <NavLink to='/' className={styles.logo}><h2>Recipe App</h2></NavLink>
         <Navigation/>
         <input type='text' placeholder='Search...' className={styles.search}></input>
      </div>   
    </div>
  )
}

export default Header