import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import UserProfile from '../../Components/Profile/UserProfile'
import axios from 'axios'
import styles from './Profile.module.scss'
import UserRecipes from '../../Components/UserRecipes/UserRecipes'
import api from '../../lib/api'
import endpoint from '../../lib/endpoint'

const Profile = () => {
  const auth = useSelector((state) => state.auth.data)

  const [user, setUser] = useState([])
  const [recipesList, setRecipesList] = useState([])

  const config = {
    headers:{
      Authorization:`Bearer ${auth.token}`
    },
    params: [auth.id],
  }

  useEffect(() => {
    const getUser = async () => {
      const result = await api.call(endpoint.getSingleUser, config)
      setUser(result.data)
    }
    getUser()
  }, [])

  useEffect(() => {
    const getUserRecipe = async () => {
      const result = await api.call(endpoint.getUserRecipe,config)
      setRecipesList(result.data)
    }
    getUserRecipe()
  }, [])
  return (
    <>
      <div className={styles.container}>
        <div className={styles.firstcontainer}>
          <h1>Profile</h1>
          <UserProfile
            key={user._id}
            id={user._id}
            firstName={user.firstName}
            lastName={user.lastName}
            age={user.age}
            email={user.email}
            recipes={user.recipes}
            image={user.image}
          />
        </div>
        <div className={styles.minicontainer}>
          <UserRecipes recipesList={recipesList} />
        </div>
      </div>
    </>
  )
}

export default Profile
