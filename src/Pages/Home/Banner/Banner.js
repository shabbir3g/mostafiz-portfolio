import React from 'react';
import {Row, Container } from 'react-bootstrap';
import heroImg from '../../../images/hero-img.png';
const Banner = () => {
    return (
        <div id="home" className="banner_section full_screen parallax_bg overlay_bg_blue_90"
        data-parallax-bg-image="assets/images/bg2.jpg">
        <div className="banner_slide_content">
            <Container className="container">
                
                <Row className="row align-items-center">
                    <div className="col-xl-6">
                        <div className="image_banner animation" data-animation="fadeInUp" data-animation-delay="0.02s">
                            <img src={heroImg} alt="my_image" />
                            <div className="circle_bg1">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 order-xl-first">
                        <div className="banner_content text_white text-center text-xl-left home-slide">
                            <h1 className="animation text-left" data-animation="fadeInUp" data-animation-delay="0.02s">Hello, I'm
                                Md. Mostafizur Rahman</h1>
                            <div id="typed-strings" className="d-none">
                                <b>Frontend Developer</b> <b>Web Developer</b> <b>WordPress Web Designer</b> <b> MERN Stack Developer</b>
                            </div>
                            <h4 className="animation text-left" data-animation="fadeInUp" data-animation-delay="0.03s">I'm a <span id="typed-text" className="text_default"></span>
                            </h4>
                            <a target="_blank"
                                href="Resume-of-Md-Mostafizur-Rahman.pdf" rel="noreferrer"
                                className="my-resume-button btn banner_ripple ripple_white  animation" data-animation="fadeInLeft"
                                data-animation-delay="0.05s"><span className="ripple"><i className="ti-download"></i></span>My
                                Resume
                            </a>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
        <a href="#about" className="down down_white page-scroll">
            <span className="mouse"><span></span></span>
        </a>
        </div>
    );
};

export default Banner;