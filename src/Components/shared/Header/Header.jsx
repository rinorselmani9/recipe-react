import Navigation from '../Navigation'
import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.navigation}>
        <h2>
          <NavLink to='/'>Recipe App</NavLink>
        </h2>
        <Navigation />
      </div>
    </div>
  )
}

export default Header
