import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Col, Container, Form, ListGroup, Nav, Row } from "react-bootstrap";
import {useState, useEffect} from 'react';
//let user = location.state.user

// props = task object
function TaskCard(props) {
    const[priorityString, setPriorityString] = useState("");
 
    useEffect(() => {
        function PriorityColor() {
            if(props.priority<=8){
                setPriorityString("bg-danger");
            }else if(props.priority>8 && props.priority<=15){
                setPriorityString("bg-warning");
            }else if(props.priority>15 && props.priority<=23){
                setPriorityString("bg-success");
            }else if(props.priority>23 && props.priority<=35){
                setPriorityString("bg-primary");
            }else{
                setPriorityString("");
            }
        }
        PriorityColor();
      }, [props.priority, priorityString]);

    return (
          <>
            <Card className="shadow-sm text-dark bg-white rounded">
                
                <Card.Body className={priorityString}>
                    <Card.Text className="text-white">
                        {props.description}
                    </Card.Text> 
                    <Card.Text className="text-black">
                        DUE: {props.date_due}
                    </Card.Text>  
                </Card.Body>   
            </Card>  
          </>
    );
    
  }
  
  export default TaskCard;