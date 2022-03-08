import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
import { Link, Route, useNavigate, useLocation } from "react-router-dom";
import { Form, Container, Row, Col, Nav, Button, Modal } from "react-bootstrap";
import TaskContainer from "../Components/TaskContainer"
import ProjectContainer from "../Components/ProjectContainer"
import ProjectModal from "../Components/ProjectModal"


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

function Projects(props)
{

    const [projectModal, setProjectModal] = useState(false);
    const [teamModal, setTeamModal] = useState(false);
    const location = useLocation();
    let user = location.state.user

    return(
        <>
            <Container fluid="lg" className="bg-white shadow rounded mt-5 h-75">
                <Row className="d-flex justify-content-between mt-4 ms-3">
                    <Col className="col-2 mt-3 p-3 text-center">
                        <span>
                            <h4 className="text-dark">
                                {user.username}'s Projects
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
                                    <Nav.Link 
                                    className="text-dark" 
                                    aria-current="page" 
                                    as={Link}
                                    to="/home"
                                    state={{user}}>Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link 
                                    className="text-secondary active" 
                                    as={Link}
                                    to="/projects"
                                    state={{user}}>Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link 
                                    className="text-dark" 
                                    as={Link}
                                    to="/contacts"
                                    state={{user}}> Contacts </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link 
                                    className="text-danger" 
                                    as={Link}
                                    to="/"
                                    state={{user}}>Logout</Nav.Link>
                                </Nav.Item>
                            </Nav>
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
                            <Button 
                            className="shadow text-dark bg-white border-white rounded" 
                            size="lg"
                            onClick={() => setProjectModal(true)}>
                                Create New Project
                            </Button>

                            <ProjectModal
                                user_id={user.id}
                                show={projectModal}
                                onHide={() => setProjectModal(false)}
                            />
                        </Row>
                    </Container>
                </Row>
                <ProjectContainer user_id={user.id}/>
            </Container>

            
        
        </>
    );
}

export default Projects;