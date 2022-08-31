import React from 'react'
import { useState } from 'react'
import styles from './Login.module.scss'
import {NavLink, useNavigate} from 'react-router-dom'

const Login = ({submit}) => {
  const navigate = useNavigate()
  const [email,setEmail] = useState()
  const [password, setPassword] = useState()
  const[message,setMessage] = useState()

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  const submitHandler = (e) => {
    e.preventDefault()

    if(!emailRegex.test(email)){
      setMessage('Email is wrong')
    }
    if(!password){
      setMessage('Password can not be empty')
    }

    const data = {
      email,
      password
    }
    submit(data)
    navigate('/')
  }


  return (
      <form className={styles.login} onSubmit={submitHandler}>
        <h1>Login</h1>
        <input type='text' placeholder="Email..." value={email} onChange={((e)=>{setEmail(e.target.value)})}/>
        <input type="text"  placeholder='Password...' value={password} onChange={((e)=>{setPassword(e.target.value)})}/>
        <button>Log In</button>
        <p>Forgot Password?</p>
        <p>Don't have an account?<NavLink to='/register'>Register now!</NavLink></p>
        {message}
      </form>  
  )
}

export default Login