import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Route, useNavigate, useLocation } from "react-router-dom";
import { Button, Card, Col, Container, Form, ListGroup, Nav, Row, Modal } from "react-bootstrap";


function TaskModal(props)
{

    const [description, setDescription] = useState('')
    const [due, setDue] = useState()
    const [classification, setClassification] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [priority, setPriority] = useState()

    async function tryAddTask() {

        let data = {
            user_id: props.user_id,
            project_id: 1,
            description: description,
            date_due: due,
            classification: classification,
            difficulty: difficulty,
            priority: priority
        }

        const response = await fetch(`/tasks`, {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
        });;
        const json = await response.json();
        console.log('this is from Login');
        console.log(json);
        if (json.hasOwnProperty('error')){
            alert(json.error)
        }               
    }

    function handleSubmit(){
        let data = {
            user_id: props.user_id,
            project_id: 1,
            description: description,
            date_due: due,
            classification: classification,
            difficulty: difficulty,
            priority: priority
        }
        console.log(data)
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
                    Create Task
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Container>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col>
                                <Form.Group controlId="difficulty">
                                    <Form.Select 
                                    autoFocus
                                    type="difficulty"
                                    value={difficulty}
                                    onChange={(e) => setDifficulty(e.target.value)}>
                                        <option>Select Difficulty</option>
                                        <option>easy</option>
                                        <option>medium</option>
                                        <option>hard</option>
                                        <option>extreme</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="priority">
                                    <Form.Select 
                                    autoFocus
                                    type="priority"
                                    value={priority}
                                    onChange={(e) => setPriority(e.target.value)}>
                                        <option>Select Priority</option>
                                        <option className="text-danger">Priority 1</option>
                                        <option className="text-warning">Priority 2</option>
                                        <option className="text-success">Priority 3</option>
                                        <option className="text-primary">Priority 4</option>
                                        <option className="text-secondary">No Priority</option>
                                    </Form.Select>
                                    
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="classification">
                                    <Form.Select 
                                    autoFocus
                                    type="classification"
                                    value={classification}
                                    onChange={(e) => setClassification(e.target.value)}>
                                        <option>Select Classification</option>
                                        <option >Logistics</option>
                                        <option >Communication</option>
                                        <option >Process</option>

                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control 
                                as="textarea" 
                                type="description"
                                value={description}
                                rows={3}
                                onChange={(e) => setDescription(e.target.value)}/>
                            </Form.Group>
                        </Row>
                    </Form>
                </Container>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
                <Button onClick={() => { handleSubmit(); props.onHide();}}> Submit</Button>
            </Modal.Footer>

        </Modal>
    );
}

export default TaskModal;