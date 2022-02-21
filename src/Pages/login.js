import React from 'react'
import './App.css';
import {Button, Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function login(){
    return(
        <div className="App" background='#FF7043'>
            <header className="App-header">
                <Container>
                <Row>
                <Col>
                <text>
                    Welcome to Task AI{"\n"}
                </text>
                </Col>
                </Row>
                <Row></Row>
                <Row xs={1}>
                    <Col><Button>Login</Button></Col>
                </Row>
                </Container>
        
      </header>
    </div>
    );
    
}

export default login;