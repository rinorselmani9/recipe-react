import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import UserProfile from '../../Components/Profile/UserProfile'
import axios from 'axios'
import styles from './Profile.module.scss'
import UserRecipes from '../../Components/UserRecipes/UserRecipes'

const Profile = () => {
  const auth = useSelector((state) => state.auth.data)

  const [user, setUser] = useState([])
  const [recipesList, setRecipesList] = useState([])

  useEffect(() => {
    const getUser = async () => {
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/users/${auth.id}`)
      setUser(result.data.data)
    }
    getUser()
  }, [])

  useEffect(() => {
    const getUserRecipe = async () => {
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/recipe/${auth.id}`)
      setRecipesList(result.data.data)
    }
    getUserRecipe()
  }, [user])
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
