import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

function home(){
    /*
        want to add an <img> for the users porfile pic
        but probably won't have time to add that
        in the welcome-user-container, add the welcome user greeting with the user's name
            - will add that later once I figure out the attributes for user information
    */
    return(
        <div className="container-fluid">
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <span className="navbar-brand mb-0 h1">Welcome, user</span>
                    </div>
                    <button type="button" className="btn btn-secondary btn-sm">Create Team</button>
                    <ul className="nav navbar-nav">
                        <li class="active"><a href="/">Home</a></li>
                        <li><a href="/Pages/projects">Projects</a></li>
                        <li><a href="/Pages/contacts">Contacts</a></li>
                        <li><a href="/Pages/accountInfo"> Account Info</a></li>  
                    </ul>
                </div>
            </nav>

            <div className="container">
                Today: Monday 10th/22 Clock: 12:00 PM
            </div>

            <div className="container">

            </div>

        </div>
    );
}

export default home;