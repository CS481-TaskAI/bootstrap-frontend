import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
import { Link, Route, useNavigate, useLocation } from "react-router-dom";
import { Form, Container, Row, Col, Nav, Button, Modal } from "react-bootstrap";
import TaskContainer from "../Components/TaskContainer"
import ProjectContainer from "../Components/ProjectContainer"


function ProjectModal(props)
{

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    async function tryAddProject() {

        let data = {
            user_id: props.user_id,
            description: description,
            title: title
        }

        const response = await fetch(`/projects`, {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
        });;
        const json = await response.json();
        console.log('this is from TaskModal');
        console.log(json);
        if (json.hasOwnProperty('error')){
            alert(json.error)
        }               
    }

    function refreshPage(){
        window.location.reload(false);
    }

    function handleSubmit(){
        tryAddProject()
        refreshPage()
    }
    

    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create Project
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Container>
                    <Row className="mb-3">
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>New Project Title</Form.Label>
                            <Form.Control size="lg"
                            placeholder="Title" 
                            autoFocus
                            type="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group className="mb-3" controlId="inputForm.ControlInput1">
                            <Form.Label>Description of Project</Form.Label>
                            <Form.Control 
                            size="lg"
                            placeholder="Description" 
                            autoFocus
                            type="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}/>
                        </Form.Group>
                    </Row>
                </Container>
            </Modal.Body>
            
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
                <Button onClick={()=> {handleSubmit(); props.onHide();}}> Submit</Button>
            </Modal.Footer>
            
        </Modal>
    );
}
export default ProjectModal