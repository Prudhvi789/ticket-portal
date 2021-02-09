import React from 'react'

const TicketTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Owner</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    {props.issues.length > 0 ? (
        props.issues.map((issue) => (
          <tr key={issue.id}>
            <td>{issue.id}</td>
            <td>{issue.title}</td>
            <td>{issue.owner}</td>
            <td>
              <button className="button muted-button" onClick={() => props.editIssue(issue)}>Edit</button>
              <button className="button muted-button" onClick={() => props.deleteIssue(issue.id)}>Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default TicketTable