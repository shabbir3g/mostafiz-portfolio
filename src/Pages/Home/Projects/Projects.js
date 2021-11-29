import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Project from './Project/Project';

const Projects = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('/projects.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);
    return (
        <div className="my-5"> 
            <Container>
                <h2 className="text-center my-4 zara-text text-primary">Projects</h2>
                <p className="mb-5 text-center">These project done by me using React JS, Node JS. and also I have used MongoDB</p>
                <Row xs={1} md={3} className="g-4">
                { 
                    services.slice(0, 3).map(service => <Project 
                    service={service}
                    key={service.id}
                    ></Project>)
                }
                </Row>
            </Container>
        </div>
    );
};

export default Projects;