import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Col, Container, Form, ListGroup, Nav, Row } from "react-bootstrap";
import {useState, useEffect} from 'react';
import TaskCard from './TaskCard'

function TaskContainer(props) {

     // tasks is the variable, setTask is the setter method
    // Not used here, but tasks will be array of task objects
    const [tasks, setTasks] = useState([]);
    const url = '/tasks'
    

    // currently just fetching dummmy data
    useEffect(() => {
        async function getTasks() {
            const response = await fetch(`/tasks?user_id=${props.user_id}`, {
                    method: 'GET',
                    headers: {
                      'Accept': 'application/json'
                    } 
                  }
            );;
            const json = await response.json();
            console.log('this is from TaskCard');
            console.log(json);
            setTasks(json);
        }
        getTasks();
      }, [props.user_id]); // Or [] if effect doesn't need props or state
              // userid will be passed here from props.

    return (
          
            <div>  {/* Here we will create task cards in a for loop and pass them each a task object */}
                {tasks.map((task) =>(
                    <div key={task.id}>
                        <TaskCard 
                            id={task.id}
                            classification={task.classification}
                            timing={task.timing}
                            status={task.status}
                            project_id={task.project_id}
                            priority={task.priority}
                            description={task.description}
                            date_due={task.date_due}
                            date_assigned={task.date_assigned}
                        />
                    </div>

                ))}    
            </div>
          
    );
    
  }
  
  export default TaskContainer;