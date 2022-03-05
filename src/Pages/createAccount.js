import React from "react";
import {useState} from "react"
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate} from "react-router-dom";

function CreateAccount(){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [bio, setBio] = useState("");

    const navigate = useNavigate()

    async function trySignUp() {
    
        let data = {
            username: username,
            email: email,
            password: password,
            bio: bio
        }

        const response = await fetch(`/signup`, {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
        });;
        const json = await response.json();
        console.log('this is from SignUp');
        console.log(json);
        if (json.hasOwnProperty('error')){
            alert(json.error)
        } else {
            goLogin() 
        }                 
    }

    function goLogin(){
        navigate('/')
    }

    function handleSubmit(event){
        event.preventDefault();
        trySignUp()
    }

    return(
        <>
            <Container className="bg-danger rounded">
                <h1 className="shadow-sm text-white mt-5 p-3 text-center rounded">Task AI</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formName">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control 
                                type="username" 
                                value={username}
                                placeholder="Enter User Name"
                                onChange={(e) => setUsername(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control 
                                type="email" 
                                value={email}
                                placeholder="Enter Email"
                                onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"/>
                            </Form.Group>

                            <Form.Group controlId="formConfirmPassword">
                                <Form.Label>Retype Password</Form.Label>
                                <Form.Control 
                                type="password" 
                                value={password}
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="extraInfo">
                                <Form.Label>Bio</Form.Label>
                                <Form.Control 
                                type="bio" 
                                value={bio}
                                placeholder="Write your bio here..."
                                onChange={(e) => setBio(e.target.value)}
                                />
                            </Form.Group>
                        </Form>

                        <Button className="mt-4"variant="info btn-block" type="submit" onClick={handleSubmit}>
                            <Link to="/" className="text-white">Create Account</Link>
                        </Button>

                        <Link to="/" className="text-white">Login to Account</Link>

                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default CreateAccount;