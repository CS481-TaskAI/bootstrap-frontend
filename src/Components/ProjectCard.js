import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Col, Container, Form, ListGroup, Nav, Row } from "react-bootstrap";
import {useState, useEffect} from 'react';
import TaskContainer from './TaskContainer'
import TaskModal from './TaskModal'


function ProjectCard(props) {

    const [taskModal, setTaskModal] = useState(false);

    /*
        PROPS:
            props.title
            props.description
            props.id
            props.user_id
    */
    

    return (
          <>
            <Card className="shadow-sm text-dark bg-white rounded">
                <Card.Body>
                    <Card.Text>
                        {props.title}
                        <Button className="bg-primary btn-sm rounded-pill" onClick={() => setTaskModal(true)}>New Task</Button>
                        <TaskModal 
                        user_id={props.user_id}
                        p_id={props.p_id}
                        p_title={props.title}
                        show={taskModal}
                        onHide={() => setTaskModal(false)}/>
                        <TaskContainer 
                        user_id={props.user_id}
                        p_id={props.p_id} />
                    </Card.Text>    
                </Card.Body>   
            </Card>  
          </>
    );
    
  }
  
  export default ProjectCard;