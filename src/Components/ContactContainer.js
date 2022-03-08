import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Col, Container, Form, ListGroup, Nav, Row } from "react-bootstrap";
import {useState, useEffect} from 'react';
import ContactCard from './ContactCard'

function ContactContainer(props) {

     // tasks is the variable, setTask is the setter method
    // Not used here, but tasks will be array of task objects
    const [contacts, setContacts] = useState([]);
    
    let url = '/contacts'
    url += `?user_id=${props.user_id}]`

    // fetching the data given
    useEffect(() => {

        async function getContacts() {
            const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                      'Accept': 'application/json'
                    } 
                  }
            );;
            const json = await response.json();
            console.log('this is from ContactContainer');
            console.log(json);
            setContacts(json);
        }
        getContacts();
      }, [props.user_id, url]); // Or [] if effect doesn't need props or state
              // userid will be passed here from props.
    


    return (
            <div key={props.force}>
                {contacts.length > 0 &&
                    <div>  {/* Here we will create task cards in a for loop and pass them each a task object */}
                        {contacts.map((contact) =>(
                            <div key={contact.id}>
                                <ContactCard 
                                    user_id={props.user_id}
                                    id={contact.id}
                                    username={contact.username}
                                    email={contact.email}
                                    bio={contact.bio}                              
                                />
                            </div>

                        ))}    
                    </div> 
                }
            </div>
    );
    
  }
  
  export default ContactContainer;