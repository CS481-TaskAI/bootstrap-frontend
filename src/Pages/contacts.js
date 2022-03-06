import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from "react-bootstrap";


function Contacts(props)
{
    return(
        <>
            <Container className="bg-white rounded mt-5 h-75">
                <Row className="d-flex justify-content-between mt-4">
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

                <Row className="d-flex mt-4">
                    <Col>
                        <Button>
                            Add Contact
                        </Button>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" GroupId="searchForm.ControlInput1">
                            <Form.Control type="search" placeholder="Search for contact"/>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Select>
                            
                        </Form.Select>
                    </Col>
                </Row>
            </Container>
        
        
        
        
        </>
    );
}


export default Contacts;