import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form } from 'react-bootstrap'
import { logout } from '../../../lib/store/slice'
import styles from './MiniCard.module.scss'
import { useNavigate } from 'react-router-dom'

const MiniCard = () => {
  const navigate = useNavigate()
  const firstName = useSelector((state) => state.auth.data.firstName)
  const dispatch = useDispatch()

  const [selectedOption, setSelectedOption] = useState()

  if (selectedOption === 'logout') {
    dispatch(logout())
    setSelectedOption('none')
    navigate('/')
  }
  if (selectedOption === 'profile') {
    navigate('/profile')
    setSelectedOption('none')
  }

  return (
    <>
      <div className={styles.mini}>
        <Form.Select onChange={(e) => setSelectedOption(e.target.value)} value={selectedOption}>
          <option value='none' selected disabled hidden>
            {firstName}
          </option>
          <option value={'profile'}>Profile</option>
          <option value={'logout'}>Log out</option>
        </Form.Select>
      </div>
    </>
  )
}

export default MiniCard
