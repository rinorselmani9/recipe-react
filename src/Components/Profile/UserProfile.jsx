import axios from 'axios'
import React,{useState} from 'react'
import styles from './UserProfile.module.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../lib/store/slice'


const UserProfile = (props) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [deleteAlert,setDeleteAlert] = useState(false)
  const [deleteMessage,setDeleteMessage] = useState()

  const handleClick = () => {
    setDeleteAlert(true)
  }
  const deleteAccount = async() => {
    const result = await axios.delete(`${process.env.REACT_APP_API_URL}/users/delete/${props.id}`)
    if(!result.success){
      setDeleteMessage(result.data)
    }
    dispatch(logout())
    return navigate('/login')
  }
  const deleteNegative = () => {
    setDeleteAlert(false)
  }

  return (
    <div className={styles.container}>
          <img src={props.image}></img>
          <hr></hr>
          <h5>{props.firstName} {props.lastName}</h5>
          <hr></hr>
          <h5>Age: {props.age}</h5>
          <hr></hr>
          <h5>Email: {props.email}</h5>
          <hr></hr>
          {props.recipes &&<h5>Recipes: {props.recipes.length}</h5>}


          {deleteAlert ===false ?<button onClick={handleClick}>Delete my account!</button>
          : <div>
            <button onClick={deleteAccount}>Yes,I'm sure!</button>
            <button onClick={deleteNegative}>No, Go back!</button>
          </div>
          }
          
    
          
    </div>
  )
}
export default UserProfile
