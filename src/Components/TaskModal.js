import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Route, useNavigate, useLocation } from "react-router-dom";
import { Button, Card, Col, Container, Form, ListGroup, Nav, Row, Modal } from "react-bootstrap";


function TaskModal(props)
{

    

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
                    <Row className="mb-3">
                        <Col>
                            <Form.Select>
                                <option>Select Category</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Select >
                                <option>Select Priority</option>
                                <option className="text-danger">Priority 1</option>
                                <option className="text-warning">Priority 2</option>
                                <option className="text-success">Priority 3</option>
                                <option className="text-primary">Priority 4</option>
                                <option className="text-secondary">No Priority</option>

                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Select >
                                <option>Select Classification</option>
                                <option className="text-danger">Priority 1</option>
                                <option className="text-warning">Priority 2</option>
                                <option className="text-success">Priority 3</option>
                                <option className="text-primary">Priority 4</option>
                                <option className="text-secondary">No Priority</option>

                            </Form.Select>
                        </Col>
                    </Row>

                    <Row>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3}/>
                        </Form.Group>
                    </Row>
                </Container>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
                <Button> Submit</Button>
            </Modal.Footer>

        </Modal>
    );
}

export default TaskModal;