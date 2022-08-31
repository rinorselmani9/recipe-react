import React,{useState} from 'react'
import styles from './Register.module.scss'
import { NavLink, useNavigate } from 'react-router-dom'

const Register = ({submit}) => {

    const navigate = useNavigate()

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const passwordRegex =  /^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{8,}$/

    const [firstName,setFirstName] = useState()
    const [lastName,setLastName] = useState()
    const [email,setEmail] = useState()
    const [age,setAge] = useState(1)
    const [password,setPassword] = useState()
    const [confirmPassword,setConfirmPassword] = useState()
    const [message,setMessage] = useState()

    const submitHandler = (e) => {
        e.preventDefault()

        if(!firstName){
            setMessage('First name can not be empty')
        }
        if(!lastName){
            setMessage('Last name can not be empty')
        }
        if(!emailRegex.test(email)){
            setMessage('Email is not valid')
        }
        if(!age){
            setMessage('Age can not be empty')
        }
        if(age < 0){
            setMessage('Age has to be greater than 1')
        }
        if(!passwordRegex.test(password)){
            setMessage('Password must contain an UpperCase Letter and a symbol')
        }
        if(confirmPassword !== password){
            setMessage('Passwords do not match')
        }

        const data = {
            firstName,
            lastName,
            email,
            age,
            password,
        }
        submit(data)
        navigate('/')
    }


  return (
    <form className={styles.register} onSubmit={submitHandler}>
        <h1>Register</h1>
            <input type='text' placeholder="First Name..." value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <input type='text' placeholder="Last Name..." value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            <input type='email' placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type='number' placeholder="Age..." value={age} onChange={(e) => setAge(e.target.value)}/>
            <input type="password"  placeholder='Password...' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="password"  placeholder='Confirm password...' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
        <button>Register</button>
        <p>Already have an account?<NavLink to='/login'>Login</NavLink></p>
      </form> 
  )
}

export default Register