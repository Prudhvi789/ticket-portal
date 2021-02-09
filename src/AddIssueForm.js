import React, { useState } from 'react'

const AddIssueForm = (props) => {
    const initialFormState = { id: 4, title: '', owner: '' }
    const [issue, setIssue] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target
      
        setIssue({ ...issue, [name]: value })
        //console.log(issue)
      }

  return (
   <div>   
    <form onSubmit={event => {
        event.preventDefault()
        if (issue.title && issue.owner) {
            issue.id += 1;
            props.addIssue(issue)   
            setIssue(initialFormState)
        }
        else{
            alert('Enter Something')
        }
      }} style={{padding: "10px"}}>   
      <label>Title</label>
      <input type="text" name="title" value={issue.title} onChange={handleInputChange} class="title" autoComplete="off"/>
      <br></br>
      <label>Owner</label>
      <input type="text" name="owner" value={issue.owner} onChange={handleInputChange} class="owner" autoComplete="off" />
      <br />
      <button>Add new Issue</button>
    </form>
   </div> 
  )
}

export default AddIssueForm;