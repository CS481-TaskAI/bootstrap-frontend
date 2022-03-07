import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
import { Form, Container, Row, Col, Nav, Button, Modal } from "react-bootstrap";




function Projects()
{
    return(
        <>
            <Container fluid="lg" className="bg-white rounded mt-5 h-75">
                <Row className="d-flex justify-content-between mt-4">
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

                <Row className="d-inline-flex justify-content-between mt-2">

                        <Col className="col-2 text-center">
                            <h6 className="text-body">
                                Today: 
                            </h6>
                        </Col>

                    </Row>







            </Container>
        
        
        </>
    );
}