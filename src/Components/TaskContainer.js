import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Col, Container, Form, ListGroup, Nav, Row } from "react-bootstrap";
import {useState, useEffect} from 'react';
import TaskCard from './TaskCard'

function TaskContainer(props) {

    // tasks is the variable, setTask is the setter method
    // Not used here, but tasks will be array of task objects
    const [tasks, setTasks] = useState([]);

    // currently just fetching dummmy data
    useEffect(() => {
        async function getTasks() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');;
            const json = await response.json();
            console.log('this is from TaskCard');
            console.log(json);
            setTasks(json);
        }
        getTasks();
      }, []); // Or [] if effect doesn't need props or state
              // userid will be passed here from props.

    return (
          
            <>  {/* Here we will create task cards in a for loop and pass them each a task object */}
                <TaskCard title='First Task'>

                </TaskCard>
            </>
          
    );
    
  }
  
  export default TaskContainer;