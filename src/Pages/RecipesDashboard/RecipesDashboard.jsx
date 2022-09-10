import React, { useEffect, useState } from 'react'
import RecipesAdminDashboard from '../../Components/AdminDashboards/RecipesDashboard'
import { useSelector } from 'react-redux'
import api from '../../lib/api'
import endpoint from '../../lib/endpoint'

const RecipesDashboard = () => {
  const token = useSelector((state) => state.auth.data.token)
  const [recipesList, setRecipesList] = useState([])

  const config = {
    headers:{
        Authorization:`Bearer ${token}`
    }
  }

  useEffect(() => {
    const getRecipes = async () => {
      const result = await api.call(endpoint.getAllRecipes, config)
      setRecipesList(result.data)
    }
    getRecipes()
  },[])


  const deleteHandler = async(data) => {
    const config = {
      headers:{
          Authorization:`Bearer ${token}`
      },
      params:[data.id]
    }
    const result = await api.call(endpoint.deleteRecipeByAdmin,config)
  }

  return <RecipesAdminDashboard recipes={recipesList} submitDelete={deleteHandler}/>
}

export default RecipesDashboard
