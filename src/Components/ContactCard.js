import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Col, Container, Form, ListGroup, Nav, Row } from "react-bootstrap";
import {useState, useEffect} from 'react';


function ContactCard(props) {

    /*
        PROPS:
            props.username
            props.email
            props.id
            props.bio
    */

    async function deleteContact(){

        let data = {
            user_id: props.user_id,
            contact_id: props.id
        }

        const response = await fetch('/mod_contacts', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data) 
            }
        );;
        const json = await response.json();
        if (json.hasOwnProperty('error')){
            alert(json.error)
        }
    }

    function clickDelete(){
        deleteContact()
    }

    return (
          <>
            <Card className="shadow-sm text-dark bg-white rounded">
                <Card.Body>
                    <Card.Text>
                        {props.username}
                        <Button 
                                type="button" 
                                class="submit" 
                                aria-label="Close" 
                                className="btn btn-light justify-content-end"
                                onClick={clickDelete}>
                                    <span aria-hidden="true">&times;</span>
                                </Button>
                    </Card.Text>    
                </Card.Body>   
            </Card>  
          </>
    );
    
  }
  
  export default ContactCard;