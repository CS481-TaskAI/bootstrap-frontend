import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Container, Row, Col, Nav, Button } from "react-bootstrap";


function Contacts(props)
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
                                    <Nav.Link className="text-dark" href="/projects">Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="text-secondary active" aria-current="page" href="/contacts">Contacts</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="text-dark" href="/accountInfo">Account Info</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                </Row>

                <Row className="d-sm-flex p-3">
                    <Col className="flex-column col-2">
                        <Button className="rounded-pill">
                            Add Contact
                        </Button>
                    </Col>

                    <Col className="flex-column col-4">
                        <Form.Group className="mb-3" GroupId="searchForm.ControlInput1">
                            <Form.Control type="search" placeholder="Search for contact"/>
                        </Form.Group>
                    </Col>

                    <Col className="flex-column col-4">
                        <Form.Select>
                            <option> Select Filter</option>
                        </Form.Select>
                    </Col>
                </Row>

                <Row>
                    
                </Row>
            </Container>
        
        
        
        
        </>
    );
}


export default Contacts;