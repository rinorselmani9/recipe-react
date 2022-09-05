import styles from './assets/sass/App.module.scss'
import withHeaderFooter from './hoc/withHeaderFooter'
import { Routes, Route } from 'react-router-dom'
import { routeData } from './lib/Routes/RouteData'
import PublicRoutes from './lib/Routes/PublicRoutes'
import PrivateRoutes from './lib/Routes/PrivateRoutes'

function App() {
  return (
    <div className={styles.main}>
      <Routes>
        {routeData.public.map((elem, index) => (
          <Route
            key={index}
            path={elem.path}
            element={<PublicRoutes>{elem.element}</PublicRoutes>}
          />
        ))}

        {routeData.admin.map((elem, index) => (
          <Route
            key={index}
            path={elem.path}
            element={<PrivateRoutes role='ADMIN'>{elem.element}</PrivateRoutes>}
          />
        ))}

        {routeData.user.map((elem, index) => (
          <Route
            key={index}
            path={elem.path}
            element={<PrivateRoutes role='USER'>{elem.element}</PrivateRoutes>}
          />
        ))}
        {routeData.exposed.map((elem, index) => (
          <Route key={index} path={elem.path} element={elem.element} />
        ))}
      </Routes>
    </div>
  )
}

export default withHeaderFooter(App)
