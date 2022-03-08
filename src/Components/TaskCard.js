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

    async function deleteTask(){

        let data = {
            "task_id": props.id
        }

        const response = await fetch('/mod_tasks', {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json'
            },
            body: JSON.stringify(data) 
            }
        );;
        const json = await response.json();
        if (json.hasOwnProperty('error')){
            alert(json.error)
        }
    }

    function refreshPage(){
        window.location.reload(false);
    }

    function clickDelete(){
        deleteTask()
        refreshPage()
    }

    return (
          <>
            <Card className="shadow-sm text-dark bg-white rounded">
                
                <Card.Body className={priorityString}>
                    <Card.Text className="justify-content-between">
                        <Row>
                            <Col style={{width: '90%'}}>
                                {props.description}
                            </Col>
                            <Col className="justify-content-end">
                                <Button 
                                type="button" 
                                class="submit" 
                                aria-label="Close" 
                                className="btn btn-light justify-content-end"
                                onClick={clickDelete}>
                                    <span aria-hidden="true">&times;</span>
                                </Button>
                            </Col>
                        </Row>
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