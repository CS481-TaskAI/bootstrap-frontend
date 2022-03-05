import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Route, useNavigate, useLocation } from "react-router-dom";
import { Button, Card, Col, Container, Form, ListGroup, Nav, Row } from "react-bootstrap";
import TaskContainer from "../Components/TaskContainer"
import ProjectContainer from "../Components/ProjectContainer"

function Home(props){
    
    const location = useLocation();
    /*
        HOW TO ACCESS THE VALUES OF THE USER

        location.state.*
        
        USER HAS THE FOLLOWING VALUES

        username, email, id, bio

        EXAMPLE: location.state.username

    */


        return(
            <>
                <Container fluid="lg" className="bg-white rounded mt-5 h-75">
                    <Row className="d-flex justify-content-between mt-4">

                        <Col className="col-2 mt-3 p-3 text-center">
                            <h4 className="text-dark ">
                                Welcome, User
                            </h4>
                        </Col>

                        <Col className="mt-3 p-3 text-center">
                            <Button className="bg-light text-dark btn-sm border-dark rounded-pill">
                                Create Team
                            </Button>       
                        </Col>

                        <Col className="mt-3 p-3 text-center">
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link className="text-secondary active" aria-current="page" href="/home">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="text-dark" href="/projects">Projects</Nav.Link>
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
    
                    <Row className="d-flex justify-content-start mt-2">

                        <Col className="col-2 text-center">
                            <h6 className="text-body">
                                Today: 
                            </h6>
                        </Col>

                    </Row>
    
                    <Row className="d-sm-flex p-3">

                        <Col className="d-grid flex-column col-5">
                            <Button className="bg-light text-dark border border-secondary btn-sm rounded-pill">
                                What would you like to do today?
                            </Button>
                        </Col>
    
                        <Col className="col-1 align-self-center text-center flex-column">
                            <h6 className="text-dark">
                                Or
                            </h6>
                        </Col>
    
                        <Col className="col-3 flex-column">
                            <Button className="bg-primary btn-sm rounded-pill">
                                Add Task Category
                            </Button>
                        </Col>

                    </Row>
    
                    <Row className="d-flex justify-content-start mt-2 p-3">

                        <Col className="col-3 text-center">
                            <h2 className="text-body">
                                Task Overview
                            </h2>
                        </Col>

                    </Row>
    
                    <Row className="justify-content-center ms-3">

                        <Container>

                            <Row className="mb-3">

                                <Col className="col-3">

                                    <Card className="shadow-sm text-dark bg-white rounded">
                                        <Card.Body>
                                            <Card.Title className="text-center">To Do</Card.Title>
                                            <Card.Text>
                                                <ListGroup>
                                                    <ListGroup.Item>
                                                        Create tasks
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        Create tasks in different categories
                                                    </ListGroup.Item>
                                                </ListGroup>
                                            </Card.Text>    
                                        </Card.Body>   
                                    </Card>

                                </Col>

                            </Row>

                        </Container>
                    </Row>

                </Container>
            </>
        );
}

export default Home;