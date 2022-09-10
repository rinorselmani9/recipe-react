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
    setSelectedOption({firstName})
    navigate('/')
  }
  if (selectedOption === 'profile') {
    navigate('/profile')
    setSelectedOption({firstName})
  }

  return (
    <>
      <div className={styles.mini}>
        <Form.Select onChange={(e) => setSelectedOption(e.target.value)} defaultValue={firstName} value={selectedOption}>
          <option value={firstName}  disabled hidden>
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
