import React from 'react';
import {Col, Row, Button, Container } from 'react-bootstrap';
import heroImg from '../../../images/hero-img.png';
const Banner = () => {
    return (
        <div>
            <div className="home-slider"> 
                <div>
                    <Container>
                        <div className="text-start">
                            <Row className="align-items-center home-slide"> 
                                <Col xs={12} lg="6">
                                <h1>I’m <span>Mostafizur</span> Rahman</h1>
                                <p> Front-end Developer</p>
                                <a target="_blank" href="Resume-of-Md-Mostafizur-Rahman.pdf"><Button className="zara-btn" variant="primary" size="md" >Download Resume</Button></a>
                                </Col>
                                <Col xs={12} lg="6">
                                <img className="slider-image d-block"  src={heroImg} alt="First slide" />
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Banner;