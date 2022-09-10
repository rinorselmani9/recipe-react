import Home from '../../Pages/Home/Home'
import Dashboard from '../../Pages/Dashboard/Dashboard'
import Login from '../../Pages/Login'
import Register from '../../Pages/Register'
import VerifyAccount from '../../Pages/VerifyAccount'
import ForgotPassword from '../../Pages/ForgotPassword'
import ResetPassword from '../../Pages/ResetPassword'
import Profile from '../../Pages/Profile'
import AddRecipe from '../../Pages/AddRecipe'
import SingleRecipe from '../../Pages/SingleRecipe'
import EditRecipe from '../../Pages/RecipeControll'
import RecipesDashboard from '../../Pages/RecipesDashboard'
import UsersDashboard from '../../Pages/UsersDashboard'
import EditUserProfile from '../../Pages/EditUserProfile'
import ErrorPage from '../../Pages/ErrorPage'
import About from '../../Pages/About'


export const routeData = {
  public: [
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: 'forgot-password',
      element: <ForgotPassword />,
    },
    {
      path: '/users/change-password',
      element: <ResetPassword />,
    },
    {
      path: 'verify',
      element: <VerifyAccount />,
    },
  ],
  admin: [
    {
      path: 'dashboard',
      element: <Dashboard />,
    },
    {
      path:'/recipes-dashboard',
      element:<RecipesDashboard/>
    },
    {
      path:'/users-dashboard',
      element:<UsersDashboard/>
    }
  ],
  user: [
    {
      path: 'profile',
      element: <Profile />,
    },
    {
      path:'/editprofile/:id',
      element:<EditUserProfile/>
    },
    {
      path: 'add-recipe',
      element: <AddRecipe />,
    },
    {
      path:'/recipe/single/:id',
      element:<SingleRecipe/>
    },
    {
      path:'/edit-recipe/:id',
      element:<EditRecipe/>
    }
  ],
  exposed: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'*',
      element:<ErrorPage/>
    }
  ],
}
