import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Col, Container, Form, ListGroup, Nav, Row } from "react-bootstrap";
import {useState, useEffect} from 'react';
import TaskCard from './TaskCard'

function TaskContainer(props) {

     // tasks is the variable, setTask is the setter method
    // Not used here, but tasks will be array of task objects
    const [tasks, setTasks] = useState([]);
    let url = '/tasks'

    if (props.p_id === undefined){
        url += `?user_id=${props.user_id}`
    } else {
        url += `?user_id=${props.user_id}&project_id=${props.p_id}`
    }



    console.log(tasks)

    // fetching the data given
    useEffect(() => {
        async function getTasks() {
            const response = await fetch(url, {
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
      }, [props.user_id, props.p_id, url]); // Or [] if effect doesn't need props or state
              // userid will be passed here from props.

    return (
            <div>
                {tasks.length > 0 &&
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
                }
            </div>
    );
    
  }
  
  export default TaskContainer;