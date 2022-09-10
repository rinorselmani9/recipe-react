import React from 'react'
import {Table} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import api from '../../../lib/api'
import endpoint from '../../../lib/endpoint'

const RecipesAdminDashboard = ({ recipes, submitDelete}) => {

  const handleDelete = async(id) => {
    // console.log(id);
    const data = {
        id
    }
    submitDelete(data)
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nr.</th>
          <th>Title</th>
          <th>Category</th>
          <th>Ingridients</th>
          <th>Instructions</th>
          <th>Avg.Rating</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {recipes.map((elem, index) => 
        <tr>
          <td>{index+1}</td>
          <td>{elem.title}</td>
          <td>{elem.category}</td>
          <td>{elem.ingridients}</td>
          <td>{elem.instructions}</td>
          <td>{elem.title}</td>
          <td><FontAwesomeIcon role="button" icon={faTrash} onClick={() => {handleDelete(elem._id)}} /></td>
        </tr>
        )}
      </tbody>
    </Table>
  )
}

export default RecipesAdminDashboard
