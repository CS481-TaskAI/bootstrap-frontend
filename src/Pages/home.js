import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Col, Container, Nav, Row } from "react-bootstrap";




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
function Home(){
    /*
        adding dummy data to some of the 
        button and stuff just to get an idea
        of how we will connect the backend with
        the frontend

        Will ask Jayme and backend team about how to go
        about setting up the buttons, inputs, and forms.
    */
    return(
        <>
            <Container className="bg-white rounded">
                <Row className="row-cols-3 row-cols-lg-5 g-2 g-lg-3 p-3">
                    <Col>
                        <h3 className="text-center text-dark mt-3 p-3">
                            Welcome, User
                        </h3>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;
