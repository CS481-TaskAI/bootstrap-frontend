import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Col, Container, Form, ListGroup, Nav, Row } from "react-bootstrap";
import {useState, useEffect} from 'react';


function ProjectCard(props) {

    /*
        PROPS:
            props.title
            props.description
            props.id
    */
    

    return (
          <>
            <Card className="shadow-sm text-dark bg-white rounded">
                <Card.Body>
                    <Card.Text>
                        {props.title}
                    </Card.Text>    
                </Card.Body>   
            </Card>  
          </>
    );
    
  }
  
  export default ProjectCard;