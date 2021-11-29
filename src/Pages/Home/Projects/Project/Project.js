import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Project = (props) => {
    const {url, title, desc, thumbnail} = props.service;
   
    return (
        <>
            <Col>
                <a href={url}>
                <Card>
                    <div className="thumbnail"> 
                            <div className="overlay"></div>
                            <Card.Img variant="top" src={thumbnail} />
                        </div>
                        <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {desc.substring(0, 40)}
                        </Card.Text>
                        <Button className="zara-btn" variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </a>
            </Col>
        </>
    );
};

export default Project;