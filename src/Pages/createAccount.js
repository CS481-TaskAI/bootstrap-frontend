import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function createAccount(){
    return(
        <>
            <Container className="bg-danger rounded">
                <h1 className="shadow-sm text-white mt-5 p-3 text-center rounded">Task AI</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter Name"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"/>
                            </Form.Group>

                            <Form.Group controlId="formConfirmPassword">
                                <Form.Label>Retype Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"/>
                            </Form.Group>
                        </Form>

                        <Button className="mt-4"variant="info btn-block" type="submit">
                            Create Account
                        </Button>

                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default createAccount;