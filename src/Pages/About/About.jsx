import React from 'react'
import {useNavigate} from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }
  return (
    <div>
        <h1>About this app</h1>
        <h6>Recipe app where you can find the best recipes in the world!</h6>
        <p>Version: 0.0.1</p>
        <button onClick={handleClick}>Back to HOME!</button>
    </div>
  )
}

export default About