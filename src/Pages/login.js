import React, {useState} from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link, Route, useNavigate } from "react-router-dom";
import Home from './home';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // for routing to /home
    const navigate = useNavigate()

    //API call to get the user information
    async function tryLogin() {
    
        let data = {
            email: email,
            password: password
        }

        const response = await fetch(`/login`, {
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
        } else {
            goHome(json) 
        }                 
    }

    function goHome(info){
        console.log("before navigating to home, ")
        console.log(info)
        navigate('/home', {state:{user:info}})
    }

    function validateForm(){
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event){
        event.preventDefault();
        tryLogin()
    }
    return(
        <>
            <Container className="bg-danger rounded">
                <h1 className="shadow-sm text-white mt-5 p-3 text-center rounded">Task AI</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg text-center">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="email">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                autoFocus
                                type="email"
                                value={email}
                                placeholder="Enter Email"
                                onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                type="password"
                                value={password}
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                        </Form>

                        <Button className="mt-4"variant="info btn-block" type="submit" disabled={!validateForm()} onClick={handleSubmit}>
                            Login
                        </Button>

                        <Link to="/createAccount" className="text-white">Create Account</Link>

                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;