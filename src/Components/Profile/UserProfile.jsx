import React,{useState} from 'react'
import styles from './UserProfile.module.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../lib/store/slice'
import endpoint from '../../lib/endpoint'
import api from '../../lib/api'
import { Button } from 'react-bootstrap'


const UserProfile = (props) => {

  const navigate = useNavigate()
  const token = useSelector((state) => state.auth.data.token)
  const dispatch = useDispatch()
  const [deleteAlert,setDeleteAlert] = useState(false)
  const [deleteMessage,setDeleteMessage] = useState()
  const config = {
    headers:{
      Authorization: `Bearer ${token}`
    },
    params:[props.id]
  }

  const handleClick = () => {
    setDeleteAlert(true)
  }
  const deleteAccount = async() => {  
    
    const result = await api.call(endpoint.deleteUserByAdmin,config)
    if(!result.success){
      setDeleteMessage(result.data)
    }
    dispatch(logout())
    return navigate('/login')
  }
  const deleteNegative = () => {
    setDeleteAlert(false)
  }
  const handleDelete = (id) => {
    navigate(`/editprofile/${id}`)
  }

  return (
    <div className={styles.container}>
          <img src={process.env.REACT_APP_API_URL+props.image}></img>
          <hr></hr>
          <h5>{props.firstName} {props.lastName}</h5>
          <hr></hr>
          <h5>Age: {props.age}</h5>
          <hr></hr>
          <h5>Email: {props.email}</h5>
          <hr></hr>
          {props.recipes &&<h5>Recipes: {props.recipes.length}</h5>}
          <Button onClick={() => {handleDelete(props.id)}}>Edit my profile!</Button>

          {deleteAlert ===false ?<Button variant='danger' onClick={handleClick}>Delete my account!</Button>
          : <div>
            <Button variant='danger' onClick={deleteAccount}>Yes,I'm sure!</Button>
            <Button variant='secondary' onClick={deleteNegative}>No, Go back!</Button>
          </div>
          }
          
    
          
    </div>
  )
}
export default UserProfile
