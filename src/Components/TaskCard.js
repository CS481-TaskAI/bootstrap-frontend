import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Col, Container, Form, ListGroup, Nav, Row } from "react-bootstrap";
import {useState, useEffect} from 'react';

// props = task object
function TaskCard(props) {

    

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
  
  export default TaskCard;