import React, { useState,useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import EditUser from '../../Components/Forms/EditUserForm'
import { useSelector } from 'react-redux'
import api from '../../lib/api'
import endpoint from '../../lib/endpoint'
import { Container } from 'react-bootstrap'
import SharedAlert from '../../Components/shared/Alert'
import ProfilePicture from '../../Components/Forms/ProfilePictureForm'

const EditUserProfile = () => {
  const userId = useParams().id
  const [user, setUser] = useState()
  const [errorMessage, setErrorMessage] = useState()
  const [variant, setVariant] = useState('danger')

  const token = useSelector((state) => state.auth.data.token)
  const navigate = useNavigate()

  const config = {
    headers:{
      Authorization: `Bearer ${token}`,
      'Content-type': 'multipart/form-data'
    },
    params: [userId],
  }

  useEffect(() => {
    const getUser = async () => {
      const result = await api.call(endpoint.getSingleUser, config)
      setUser(result.data)
    }
    getUser()
  }, [userId])


  const handleSubmit = async(user) => {
    const config = {
      headers:{
        Authorization: `Bearer ${token}`,
      },
      data:user,
      params: [userId],
      
    }
    
    console.log(config);
    const result = await api.call(endpoint.editUser,config)
    console.log(result);
    if (!result.success) {
        setErrorMessage(result.data)
    }
  
    setVariant('success')
    navigate('/profile')

  }
  const handleImageChange = async(file) => {
    const data = new FormData()
    data.append('profile-image',file)
    const dataConfig = {...config, data}

    try {
      await api.call(endpoint.changeProfilePicture, dataConfig)
      setVariant('success')
      setErrorMessage('success')
    } catch (err) {
      setErrorMessage(err.message)
    }
  }
  
  return (
    <>
      <Container>
        <h2>Edit my profile</h2>
        <SharedAlert variant={variant}>{errorMessage}</SharedAlert>
      </Container>
      <ProfilePicture imageData={''} changeImage={handleImageChange}/>
      {user && <EditUser user={user} submit={handleSubmit} setMessage={setErrorMessage}/>}
    </>
  )
}

export default EditUserProfile
