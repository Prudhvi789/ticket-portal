import React from "react";
import TicketTable from "./Tickettable";
import AddIssueForm from "./AddIssueForm";
import {Container,Row,Col} from 'react-bootstrap';
import './App.css';


function App() {
  //let issuesData=[];
  const [issues, setIssues] = React.useState([]);
  React.useEffect(() => {
   fetch("http://localhost:3000/posts").then((result)=>result.json()).then((data)=> setIssues(data)); 
  },[]);

  const addIssue = (issue) => {
    issue.id = issues.length + 1
    setIssues([...issues, issue])
  }

  const deleteIssue = (id) => {
    setIssues(issues.filter((issue) => issue.id !== id))
  }
  
  const editIssue = (issue) => {
    issue.title = <input type='text' defaultValue={issue.title} id='Title' autoComplete="off" />;
    issue.owner = 
    <div>
      <input type='text' defaultValue={issue.owner} id='Owner' autoComplete="off" />
      <button onClick={ () => {
        issue.title = document.getElementById('Title').value; 
        issue.owner = document.getElementById('Owner').value; 
        setIssues(issues.map(function(item) { return item.id === issue.id ? issue : item; }));
        } }>GO</button>
    </div>
    setIssues(issues.map(function(item) { return item.id === issue.id ? issue : item; }));
    //setIssues(issues.map(function(item) { return item.id === id ? issue : item; }));
  }
  
  return (
    <div className="App">
      <Container>
        <h1>Ticket Portal</h1>
        <Row className="main">
          <Col>
            <h2>Add Ticket</h2>
            <AddIssueForm addIssue={addIssue} />
          </Col>
          <Col>
            <h2>View Tickets</h2>
            <TicketTable issues={issues} deleteIssue={deleteIssue} editIssue={editIssue}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
