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
  ],
  user: [
    {
      path: 'profile',
      element: <Profile />,
    },
    {
      path: 'add-recipe',
      element: <AddRecipe />,
    },
    {
      path:'/recipe/:id',
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
  ],
}
