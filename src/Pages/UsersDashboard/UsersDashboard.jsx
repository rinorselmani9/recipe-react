import React, { useState, useEffect } from 'react'
import UsersAdminDashboard from '../../Components/AdminDashboards/UsersDashboard'
import api from '../../lib/api'
import endpoint from '../../lib/endpoint'
import { useSelector } from 'react-redux'

const UsersDashboard = () => {

    const token = useSelector((state) => state.auth.data.token)
    const [usersList, setUsers] = useState([])

    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    useEffect(()=>{
        const getUsers = async() => {
            const result = await api.call(endpoint.getUsers, config)
            setUsers(result.data)
        }
        getUsers()
    },[])

    const submitDelete = async(id) => {
        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            },
            params:[id]
        }
        console.log(id);
        const result = await api.call(endpoint.deleteUserByAdmin,config)
    }
  return (
    <UsersAdminDashboard users={usersList} deleteHandler={submitDelete}/>
  )
}

export default UsersDashboard