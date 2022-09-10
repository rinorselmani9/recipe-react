import React from 'react'
import { Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const UsersAdminDashboard = ({ users,deleteHandler}) => {
  const handleDelete = (id) => {
    deleteHandler(id)
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nr.</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Verified</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((elem, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{elem.firstName}</td>
            <td>{elem.lastName}</td>
            <td>{elem.email}</td>
            <td>{JSON.stringify(elem.verified)}</td>
            <td>{elem.role}</td>
            <td>
              <FontAwesomeIcon
                role='button'
                icon={faTrash}
                onClick={() => {
                  handleDelete(elem._id)
                }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default UsersAdminDashboard
