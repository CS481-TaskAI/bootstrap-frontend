import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Col, Container, Form, ListGroup, Nav, Row } from "react-bootstrap";
import {useState, useEffect} from 'react';
import ProjectCard from './ProjectCard'

function ProjectContainer(props) {

     // tasks is the variable, setTask is the setter method
    // Not used here, but tasks will be array of task objects
    const [projects, setProjects] = useState([]);
    
    let url = '/projects'
    url += `?user_id=${props.user_id}`

    // fetching the data given
    useEffect(() => {
        async function getProjects() {
            const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                      'Accept': 'application/json'
                    } 
                  }
            );;
            const json = await response.json();
            console.log('this is from ProjectContainer');
            console.log(json);
            setProjects(json);
        }
        getProjects();
      }, [url]); // Or [] if effect doesn't need props or state
              // userid will be passed here from props.

    return (
            <div>
                {projects.length > 0 &&
                    <div>  {/* Here we will create task cards in a for loop and pass them each a task object */}
                        {projects.map((project) =>(
                            <div key={project.id}>
                                <ProjectCard 
                                    user_id={props.user_id}
                                    p_id={project.id}
                                    title={project.title}
                                    description={project.description}                              
                                />
                            </div>

                        ))}    
                    </div> 
                }
            </div>
    );
    
  }
  
  export default ProjectContainer;