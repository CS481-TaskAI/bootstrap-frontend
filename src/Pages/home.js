import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Route, useNavigate, useLocation } from "react-router-dom";
import { Button, Card, Col, Container, Form, ListGroup, Nav, Row } from "react-bootstrap";
import TaskContainer from "../Components/TaskContainer"
import ProjectContainer from "../Components/ProjectContainer"



/*
    container for the create team button, need to add an
    onClick function and create another component for the 
    create team form 
*/


/*
    container for the nav bar side of the header, don't need to add much
    other than changing the color of the font to indicate the active page
    the user is currently on.
*/


/*
    container for the header bar which holds the welcome user, create team button,
    and nav bar containers and puts them together into one unit.
    will format after seeing how the bootstrap put them together

    adding a props to function so that we can pull from the database to 
    display the user's name for the welcome greeting
*/


/*
    container for the current date
    will need to format is differently to 
    match up to Taban's prototype in figma
*/


/*
    container for the adding the task component. When user
    clicks on the input form and popup form will pop up and
    allow the user to add tasks to their task category

    use an input group to be the popup screen
*/


/*
    container that will hold the task categories
    need to make another function for the 
    boostrap cards. the cards will respresent the categories
    that will hold the tasks
*/

/*
    home will show all of the components inside of the main 
    container. Home container will hold all of the content.
*/
function Home(props){
    
    const location = useLocation();
    /*
        HOW TO ACCESS THE VALUES OF THE USER

        location.state.*
        
        USER HAS THE FOLLOWING VALUES

        username, email, id, bio

        EXAMPLE: location.state.username

    */


    return(
        <>
            <Container fluid="md" className="bg-white rounded mt-5 h-75">
                <Row className="d-flex justify-content-between mt-4">
                    <Col className="mt-3 p-3 text-center">
                        <h4 className="text-dark ">
                            Welcome, {location.state.username} 
                        </h4>
                    </Col>
                    <Col className="mt-3 p-3 text-center">
                        <Button className="bg-light text-dark btn-sm border-dark rounded-pill">
                            Create Team
                        </Button>   
                        
                    </Col>
                    <Col className="mt-3 p-3 text-center">
                        <Nav>
                            <Nav.Item>
                                <Nav.Link className="text-secondary ative" aria-current="page" href="/home">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="text-dark" href="/projects">Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="text-dark" href="/contacts">Contacts</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="text-dark" href="/accountInfo">Account Info</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-start text-start">
                    <Col className="col-3 text-center">
                        <h6 className="text-body">
                            Today: March 1, 2022
                        </h6>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-between text-start p-3">
                    <Col className="col-5">
                        <Form>
                            <Form.Group controlId="formInputTask">
                                <Form.Control type="input" placeholder="What would you like to do?" />
                            </Form.Group>
                        </Form>
                    </Col>

                    <Col>
                        <h6 className="text-dark">
                            Or
                        </h6>
                    </Col>

                    <Col>
                        <Button className="bg-primary btn-sm rounded-pill">
                            Add Task Category
                        </Button>
                    </Col>

                    <Col>
                       <Card className="text-white bg-danger rounded">
                            <Card.Body>
                                <Card.Title>Weekly Rewards</Card.Title>
                                <Card.Text> Walk/Gym </Card.Text>    
                            </Card.Body>   
                        </Card>  
                    </Col>
                </Row>

                <Row className="d-flex justify-content-start mt-2">
                    <Col className="col-2 text-center">
                        <h6 className="text-body">
                            Task Overview
                        </h6>
                    </Col>
                </Row>

                <Row className="justify-content-center ms-3">
                    <Container>
                        <Row className="mb-3">
                            <Col className="col-3">
                                <ProjectContainer user_id={location.state.id} />
                                <Card className="shadow-sm text-dark bg-white rounded">
                                    <Card.Body>
                                        <Card.Title>To Do</Card.Title>
                                        <Card.Text>
                                            <ListGroup>
                                                <ListGroup.Item>
                                                    Create tasks
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Create tasks in different categories
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Card.Text>    
                                    </Card.Body>   
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </>
    );
}

export default Home;