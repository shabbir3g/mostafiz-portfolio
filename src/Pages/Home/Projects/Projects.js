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
            {/* <Container>
                <h2 className="text-center my-4 zara-text text-primary">Projects</h2>
                <p className="mb-5 text-center">These project done by me using React JS, Node JS. and also I have used MongoDB</p>
                <Row xs={1} md={4} className="g-4">
                { 
                    services.slice(0, 4).map(service => <Project 
                    service={service}
                    key={service.id}
                    ></Project>)
                }
                </Row>
            </Container> */}


            {/* Testing code  */}
            <section id="projects" className="pb_70 ">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7 col-md-9 text-center">
                    <div className="heading_s1 animation" data-animation="fadeInUp"
                        data-animation-delay="0.02s">
                        <h2>My Projects</h2>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="cleafix small_divider"></div>
                </div>
            </div>
            <div className="row mb-4 mb-md-5">
                <div className="col-md-12 text-center">
                    <ul className="list_none grid_filter filter_tab1 filter_white animation" data-animation="fadeInUp"
                        data-animation-delay="0.04s">
                        <li><a href="/#" className="current" data-filter="*">all</a></li>
                        <li><a href="/#" data-filter=".react">React JS</a></li>
                        <li><a href="/#" data-filter=".mern">MERN</a></li>
                        <li><a href="/#" data-filter=".wordpress">WordPress</a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <ul className="grid_container gutter_medium work_col3 portfolio_gallery portfolio_style1 animation masonry"
                        data-animation="fadeInUp" data-animation-delay="0.04s">
                      <li className="grid-sizer">
                        <li className="grid_item react mern">
                            <div className="portfolio_item" >
                                <a href="/" className="image_link">
                                    <img src="assets/images/project-01.png" alt="images" />
                                </a>
                                <div className="portfolio_content">
                                    <h5><a href="project1.html">Super Bicycles</a>
                                    </h5>
                                    <a className="portfolio_btn" href="project1.html">Details</a>
                                </div>
                            </div>
                        </li>
                        <li className="grid_item react">
                            <div className="portfolio_item">
                                <a href="/" className="image_link">
                                    <img src="assets/images/project-02.png" alt="images" />
                                </a>
                                <div className="portfolio_content">
                                    <div className="link_container">
                                    </div>
                                    <h5><a href="project2.html">Skill Develop</a></h5>
                                    <a className="portfolio_btn" href="project2.html">Details</a>
                                </div>
                            </div>
                        </li>
                        <li className="grid_item react mern">
                            <div className="portfolio_item">
                                <a href="/" className="image_link">
                                    <img src="assets/images/project-03.png" alt="images" />
                                </a>
                                <div className="portfolio_content">
                                    <div className="link_container">

                                    </div>
                                    <h5><a href="project3.html">Tour X</a></h5>
                                    <a className="portfolio_btn" href="project3.html">Details</a>
                                </div>
                            </div>
                        </li>
                        <li className="grid_item wordpress">
                            <div className="portfolio_item">
                                <a href="/" className="image_link">
                                    <img src="assets/images/project-04.png" alt="imageh" />
                                </a>
                                <div className="portfolio_content">
                                    <div className="link_container">

                                    </div>
                                    <h5><a href="project4.html">InterWorkout Gym</a>
                                    </h5>
                                    <a className="portfolio_btn" href="project4.html">Details</a>
                                </div>
                            </div>
                        </li>
                        <li className="grid_item wordpress">
                            <div className="portfolio_item">
                                <a href="/" className="image_link">
                                    <img src="assets/images/project5.png" alt="imageh" />
                                </a>
                                <div className="portfolio_content">
                                    <div className="link_container">

                                    </div>
                                    <h5><a href="project4.html">InterWorkout Gym</a>
                                    </h5>
                                    <a className="portfolio_btn" href="project4.html">Details</a>
                                </div>
                            </div>
                        </li>
                        <li className="grid_item react">
                            <div className="portfolio_item">
                                <a rel="noreferrer"  href="/" className="image_link">
                                    <img src="assets/images/project4.png" alt="imaged" />
                                </a>
                                <div className="portfolio_content">
                                    <div className="link_container">

                                    </div>
                                    <h5><a href="project5.html">Health Care</a></h5>
                                    <a className="portfolio_btn" href="project5.html">Details</a>
                                </div>
                            </div>
                        </li>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </section>
            {/* Testing code  */}


        </div>
    );
};

export default Projects;