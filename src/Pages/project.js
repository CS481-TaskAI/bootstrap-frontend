import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
import { Form, Container, Row, Col, Nav, Button, Modal } from "react-bootstrap";




function Projects()
{
    return(
        <>
            <Container fluid="lg" className="bg-white rounded mt-5 h-75">
                <Row className="d-flex justify-content-between mt-4 ms-3">
                    <Col className="col-2 mt-3 p-3 text-center">
                        <span>
                            <h4 className="text-dark">
                                User
                            </h4>
                        </span> 
                    </Col>

                    <Col className="mt-3 p-3 text-center">
                        <Button className="bg-light text-dark btn-sm border-dark rounded-pill">
                            Create Team
                        </Button> 
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
                                Create Project
                            </Button>
                        </Row>
                    </Container>
                </Row>
            </Container>
        
        
        </>
    );
}

export default Projects;