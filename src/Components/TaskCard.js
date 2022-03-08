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
                setPriorityString("bg-danger text-white");
            }else if(props.priority>8 && props.priority<=15){
                setPriorityString("bg-warning text-dark");
            }else if(props.priority>15 && props.priority<=23){
                setPriorityString("bg-success text-white");
            }else if(props.priority>23 && props.priority<=35){
                setPriorityString("bg-primary text-white");
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
                    <Card.Text className="justify-content-between">
                        {props.description}
                        <Button type="button" class="submit" aria-label="Close" className="btn btn-light">
                            <span aria-hidden="true">&times;</span>
                        </Button>
                    </Card.Text> 
                    <Card.Text>
                        DUE: {props.date_due}
                    </Card.Text>  
                </Card.Body>   
            </Card>  
          </>
    );
    
  }
  
  export default TaskCard;