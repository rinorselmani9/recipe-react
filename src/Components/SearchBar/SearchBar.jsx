import React, { useState } from 'react'
import {Form} from 'react-bootstrap'
import styles from './Searchbar.module.scss'

const SearchBar = ({filterSearch}) => {
    const [search, setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        filterSearch(search)
    }

  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <input
                type='text'
                value={search}
                onChange={(e)=>{setSearch(e.target.value)}}
                placeholder='Search...'
                className={styles.searchInput}
            />
        </Form.Group>
    </Form>
  )
}

export default SearchBar