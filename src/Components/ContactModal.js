import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
import { Link, useLocation  } from "react-router-dom";
import { Form, Container, Row, Col, Nav, Button, Modal } from "react-bootstrap";

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

    function refreshPage(){
        window.location.reload(false);
    }

    function handleSubmit(event)
    {
        console.log(props.user_id)
        tryAddContact()
        refreshPage()
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
export default ContactModal;