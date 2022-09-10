import React from 'react'
import {Form } from 'react-bootstrap'

const CategoryFilter = ({filterCategory}) => {
    const filterChange = (e) => {
        filterCategory(e.target.value)
    }
  return (
    <>
    <Form.Select defaultValue='default' onChange={filterChange}>
        <option value="default" disabled hidden>Category Filter</option>
        <option value='Soup'>Soup</option>
        <option value='Pizza'>Pizza</option>
        <option value='SeaFood'>SeaFood</option>
        <option value='Steak'>Steak</option>
      </Form.Select>
    </>
  )
}

export default CategoryFilter