import styles from './assets/sass/App.module.scss'
import withHeaderFooter from './hoc/withHeaderFooter'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Dashboard  from './Pages/Dashboard/Dashboard'
import Login from './Pages/Login'
import Register from './Pages/Register'

function App() {
  return (
    <div className={styles.main}>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>  
  )
}


export default withHeaderFooter(App)
