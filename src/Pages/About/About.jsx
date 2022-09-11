import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Button } from 'react-bootstrap'

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
        <Button variant='secondary' onClick={handleClick}>Back to HOME!</Button>
    </div>
  )
}

export default About