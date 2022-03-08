import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Col, Container, Form, ListGroup, Nav, Row } from "react-bootstrap";
import {useState, useEffect} from 'react';
import TaskContainer from './TaskContainer'


function ProjectCard(props) {

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
                        <TaskContainer 
                        user_id={props.user_id}
                        p_id={props.id} />
                    </Card.Text>    
                </Card.Body>   
            </Card>  
          </>
    );
    
  }
  
  export default ProjectCard;