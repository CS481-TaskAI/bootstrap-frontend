import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useReducer } from "react";
import { Link, useNavigate, useLocation  } from "react-router-dom";
import { Form, Container, Row, Col, Nav, Button, Modal } from "react-bootstrap";
import ContactContainer from "../Components/ContactContainer"


function ContactModal(props)
{
    const [contact_username, setContactUsername] = useState('')
    

    async function tryAddContact() {

        let data = {
            user_id: props.user_id,
            contact_username: contact_username
        }

        const response = await fetch(`/contacts`, {
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

    function handleSubmit(event)
    {
        console.log(props.user_id)
        tryAddContact()
        
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
                    Add Contact
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Container>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group className="mb-3" controlId="inputForm.ControlInput1">
                                <Form.Control 
                                size="lg" 
                                placeholder="User Name" 
                                autoFocus
                                type="contact_username"
                                value={contact_username}
                                onChange={(e) => setContactUsername(e.target.value)}/>
                            </Form.Group>
                        </Row>
                    </Form>
                </Container>
            </Modal.Body>
            
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
                <Button onClick={(event) => { handleSubmit(); props.onHide(); props.triggerParentUpdate()}}> Submit</Button>
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
    const [force, forceUpdate] = useState(false);
    
    let location = useLocation();
    let user = location.state.user
    console.log("Contacts Page initialization")
    console.log(user)
    
    function updateParent(){
        forceUpdate(!false)
    }


    return(
        
        <>
            <Container fluid="lg" className="bg-white rounded mt-5 h-75">
                <Row className="d-flex justify-content-between mt-4">
                    <Col className="col-2 mt-3 p-3 text-center">
                        <span>
                            <h4 className="text-dark">
                                {user.username} Contacts
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
                                as={Link}
                                to="/home"
                                state={{user}}>Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link 
                                className="text-dark" 
                                as={Link}
                                to="/projects"
                                state={{user}}>Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link 
                                className="text-secondary active" 
                                aria-current="page" 
                                as={Link}
                                to="/contacts"
                                state={{user}}> Contacts </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link 
                                className="text-dark" 
                                as={Link}
                                to="/accountInfo"
                                state={{user}}>Account Info</Nav.Link>
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
                        triggerParentUpdate={updateParent}
                        user_id={user.id}
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
                        <ContactContainer user_id={user.id} update={force}/>    
                    </Col>
                </Row>

                <Row>
                    
                </Row>
            </Container>
        
        
        
        
        </>
    );
}


export default Contacts;