import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Col, Container, Nav, Row } from "react-bootstrap";


/*
    container for the welcome, user greeting for the home page only
*/
function welcomeUser(props)
{
    return(
        <Container>
            <div className="">
                Welcome, {props.user.name};
            </div>
        </Container>
    );
}

/*
    container for the create team button, need to add an
    onClick function and create another component for the 
    create team form
*/
function createTeamButton()
{
    return(
        <Container>
            <div className="">
                <Button variant="outline-secondary" size="sm">Create Team</Button>
            </div> 
        </Container>
    );

}

/*
    container for the nav bar side of the header, don't need to add much
    other than changing the color of the font to indicate the active page
    the user is currently on.
*/
function navBar()
{
    return(
        <Container>
            <Nav>
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/contacts">Contacts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/accountInfo">Account Info</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    );
}

/*
    container for the header bar which holds the welcome user, create team button,
    and nav bar containers and puts them together into one unit.
    will format after seeing how the bootstrap put them together

    adding a props to function so that we can pull from the database to 
    display the user's name for the welcome greeting
*/
function headerBar()
{
    return(
        <Container>
            <Row>
                <Col>
                    <welcomeUser user="User"/>
                </Col>
                <Col>
                    <createTeamButton/>
                </Col>
                <Col>
                    <navBar/>
                </Col>
            </Row>
        </Container>
    );
}

/*
    container for the current date
    will need to format is differently to 
    match up to Taban's prototype in figma
*/
function formatDate(date)
{
    return date.toLocaleDateString();
}

/*
    home will show all of the components inside of the main 
    container. Home container will hold all of the content.
*/
function home(props){
    /*
        adding dummy data to some of the 
        button and stuff just to get an idea
        of how we will connect the backend with
        the frontend

        Will ask Jayme and backend team about how to go
        about setting up the buttons, inputs, and forms.
    */
    return(
        <Container className="">
            <Row>
                <headerBar/>
            </Row>
            <Row>
                <formatDate/>
            </Row>
            <Row>

            </Row>
            
        </Container>
    );
}

export default home;
