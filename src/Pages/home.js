import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Route, useNavigate, useLocation } from "react-router-dom";
import { Button, Card, Col, Container, Form, ListGroup, Nav, Row, Modal } from "react-bootstrap";
import TaskContainer from "../Components/TaskContainer"





function TaskModal(props)
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
                    Add task to a category
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Container>
                    <Row className="mb-3">
                        <Col>
                            <Form.Select>
                                <option>Select Category</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Select >
                                <option>Select Priority</option>
                                <option className="text-danger">Priority 1</option>
                                <option className="text-warning">Priority 2</option>
                                <option className="text-success">Priority 3</option>
                                <option className="text-primary">Priority 4</option>
                                <option className="text-secondary">No Priority</option>

                            </Form.Select>
                        </Col>
                    </Row>

                    <Row>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3}/>
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

function CategoryModal(props)
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
                    Create a new task category
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Container>
                    <Row className="mb-3">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control size="lg" type="text" placeholder="What is your new task category?" />
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

function Home(props){
    
    const [taskModal, setTaskModal] = React.useState(false);
    const [categoryModal, setCategoryModal] = React.useState(false);
    const [teamModal, setTeamModal] = React.useState(false);
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
                <Container fluid="lg" className="bg-white rounded mt-5 h-75">
                    <Row className="d-flex justify-content-between mt-4 ms-3">
                        <Col className="col-2 mt-3 p-3 text-center">
                            <span>
                                
                                <h4 className="text-dark">
                                    Welcome, User
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
                                    <Nav.Link className="text-secondary active" aria-current="page" href="/home">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="text-dark" href="/project">Projects</Nav.Link>
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
    
                    <Row className="d-inline-flex p-3 ms-3">

                        <Col className="col-2 text-center">
                            <h6 className="text-body">
                                Today: 
                            </h6>
                        </Col>

                    </Row>
    
                    <Row className="d-sm-flex p-3 ms-3">

                        <Col className="d-grid flex-column col-5">
                            <Button className="bg-light text-dark border border-secondary btn-sm rounded-pill" onClick={() => setTaskModal(true)}>
                                What would you like to do today?
                            </Button>

                            <TaskModal
                            show={taskModal}
                            onHide={() => setTaskModal(false)}
                            />
                        </Col>
    
                        <Col className="col-1 align-self-center text-center flex-column">
                            <h6 className="text-dark">
                                Or
                            </h6>
                        </Col>
    
                        <Col className="col-3 flex-column">
                            <Button className="bg-primary btn-sm rounded-pill" onClick={() => setCategoryModal(true)}>
                                Create Task Category
                            </Button>

                            <CategoryModal
                            show={categoryModal}
                            onHide={() => setCategoryModal(false)}
                            />
                        </Col>

                    </Row>
    
                    <Row className="d-inline-flex p-3 ms-3">

                        <Col className="text-center">
                            <h2 className="text-body">
                                Task Overview 
                            </h2>
                        </Col>

                    </Row>
    
                    <Row className="justify-content-center ms-3">

                        <Container>

                            <Row className="mb-3">

                                <Col className="col-3">

                                    <Card className="shadow-sm text-dark bg-white rounded">
                                        <Card.Body>
                                            <Card.Title className="text-center">To Do</Card.Title>
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