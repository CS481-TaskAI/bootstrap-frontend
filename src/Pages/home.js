import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Col, Container, Nav, Row } from "react-bootstrap";


/*
    container for the welcome, user greeting for the home page only
*/
function WelcomeUser()
{
    return(
        <Container>
            <div className="">
                Welcome User;
            </div>
        </Container>
    );
}

/*
    container for the create team button, need to add an
    onClick function and create another component for the 
    create team form
*/
function CreateTeamButton()
{
    return(
        <Container>
            <Button variant="outline-secondary" size="sm">Create Team</Button>   
        </Container>
    );

}

/*
    container for the nav bar side of the header, don't need to add much
    other than changing the color of the font to indicate the active page
    the user is currently on.
*/
function NavBar()
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
function HeaderBar()
{
    return(
        <Container>
            <Row>
                <Col>
                    <WelcomeUser/>
                </Col>
                <Col>
                    <CreateTeamButton/>
                </Col>
                <Col>
                    <NavBar/>
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
function FormatDate(date)
{
    return date.toLocaleDateString();
}



/*
    container for the adding the task component. When user
    clicks on the input form and popup form will pop up and
    allow the user to add tasks to their task category

    use an input group to be the popup screen
*/
function CreateAndRewards()
{
    return(
        <Container>
            <Row>
                <Col>
                    <div className="d-grid gap-2">
                        <Button variant="light">
                            What would you like to do today?
                        </Button>
                    </div>
                </Col>

                <Col>
                    <div>
                        Or
                    </div>
                </Col>

                <Col>
                    <Button variant="primary">
                        Primary
                    </Button>
                </Col>

                <Col>
                    <Container>
                        Weekly Rewards
                    </Container>
                </Col>
            </Row>

        </Container>
    );
}

/*
    container that will hold the task categories
    need to make another function for the 
    boostrap cards. the cards will respresent the categories
    that will hold the tasks
*/
function TaskCategories()
{
    return(
        <Container>

        </Container>
    );
}
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
            <Container>
                <Row>
                    <HeaderBar/>
                </Row>
                <Row>
                    <FormatDate/>
                </Row>
                <Row>
                    <CreateAndRewards/>
                </Row>
                <Row>
                    <TaskCategories/>
                </Row>
                
            </Container>
        </>
    );
}

export default Home;
