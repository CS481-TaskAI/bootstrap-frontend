import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
import { Form, Container, Row, Col, Nav, Button, Modal } from "react-bootstrap";


function ProjectModal(props)
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
                    Create Project
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Container>
                    <Row className="mb-3">
                        <Form.Group className="mb-3" controlId="inputForm.ControlInput1">
                            <Form.Control size="lg" type="input" placeholder="Project Name" />
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

function TeamModal(props)
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
                    Create a team/organization
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Container>
                    <Row className="mb-3">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control size="lg" type="text" placeholder="What is the name of your team/org?" />
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

function Projects()
{

    const [projectModal, setProjectModal] = useState(false);
    const [teamModal, setTeamModal] = useState(false);
    return(
        <>
            <Container fluid="lg" className="bg-white shadow rounded mt-5 h-75">
                <Row className="d-flex justify-content-between mt-4 ms-3">
                    <Col className="col-2 mt-3 p-3 text-center">
                        <span>
                            <h4 className="text-dark">
                                User
                            </h4>
                        </span> 
                    </Col>

                    <Col className="mt-3 p-3 text-center">
                        <Button className="bg-light text-dark btn-sm border-dark rounded-pill" onClick={() => setTeamModal(true)}>
                            Create Team
                        </Button>

                        <TeamModal
                            show={teamModal}
                            onHide={() => setTeamModal(false)}
                            /> 
                    </Col>

                    <Col className="mt-3 p-3 text-center">
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link className="text-dark" href="/home">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="text-secondary active" aria-current="page" href="/projects">Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="text-dark" href="/contacts">Contacts</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="text-dark" href="/accountInfo">Account Info</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>

                </Row>

                <Row className="d-inline-flex p-3 ms-3">

                        <Col className="text-center">
                            <h6 className="text-body">
                                Today: 
                            </h6>
                        </Col>

                </Row>

                <Row className="d-flex p-3 ms-3">

                        <Col className="text-start">
                            <h2 className="text-body">
                                Project Overview 
                            </h2>
                        </Col>

                </Row>

                <Row>
                    <Container className="ms-3">
                        <Row className="row-cols-3 col-6 ms-2">
                            <Button className="shadow text-dark bg-white border-white rounded" size="lg">
                                Create New Project
                            </Button>

                            <ProjectModal
                                show={projectModal}
                                onHide={() => setProjectModal(false)}
                            />
                        </Row>
                    </Container>
                </Row>
            </Container>
        
        
        </>
    );
}

export default Projects;