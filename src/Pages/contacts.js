import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
import { Form, Container, Row, Col, Nav, Button, Modal } from "react-bootstrap";


function ContactModal(props)
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
                    Add Contact
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Container>
                    <Row className="mb-3">
                        <Form.Group className="mb-3" controlId="inputForm.ControlInput1">
                            <Form.Control size="lg" type="input" placeholder="Full Name" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-2">
                        <Form.Group className="mb-3" controlId="inputForm.ControlInput2">
                            <Form.Control size="lg" type="input" placeholder="Email" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-2">
                        <Form.Group className="mb-3" controlId="inputForm.ControlInput3">
                            <Form.Control size="lg" type="input" placeholder="Organization" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-2">
                        <Form.Group className="mb-3" controlId="inputForm.ControlInput4">
                            <Form.Control size="lg" type="input" placeholder="Role" />
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
function Contacts(props)
{
    const [contactModal, setContactModal] = useState(false);
    const [teamModal, setTeamModal] = useState(false);
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
                        <Button className="rounded-pill" onClick={() => setContactModal(true)}>
                            Add Contact
                        </Button>

                        <ContactModal
                        show={contactModal}
                        onHide={() => setContactModal(false)}
                        />

                        
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