import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import footerLogo from '../../../images/logo.png';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Facebook = <FontAwesomeIcon icon={faFacebook} />;
const Twitter = <FontAwesomeIcon icon={faTwitter} />;
const Instagram = <FontAwesomeIcon icon={faInstagram} />;
const Linkedin = <FontAwesomeIcon icon={faLinkedin} />;
const Youtube = <FontAwesomeIcon icon={faYoutube} />;

const Footer = () => {
    return (
        <div className="footer mt-0" > 
            <Container>
                <Row xs={1} md={4} className="g-1 py-5">
                    <div className="col-md-4 col-lg-4">
                        <Card className="border-0">
                            <Card.Body className="text-light">
                            <Link to="/"><img className="d-inline-block align-top footer-logo" src={footerLogo} alt="Footer Logo" /></Link>
                            <Card.Text style={{color: '#fff'}}>
                              This is my portfolio website you can check my profile from here and also you can donwload my Resume                      
                            </Card.Text>
                            </Card.Body>
                            
                        </Card>
                    </div>
                    <div className="col-md-2 col-lg-2">
                    <Card className="border-0">
                        <Card.Body className="text-light">
                        <Card.Title className="text-uppercase  mb-4">Services</Card.Title>
                            <ul className='footer-services'>
                                <li><Link to="/">Cancer Services</Link></li>
                                <li><Link to="/">Liver Transplant</Link></li>
                                <li><Link to="/">Kidney Cancer</Link></li>
                                <li><Link to="/">Anxiety Disorder</Link></li>
                            </ul>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="col-md-3 col-lg-3">
                    <Card className="border-0">
                        <Card.Body className="text-light">
                        <Card.Title className="text-uppercase  mb-4">Gen In Touch</Card.Title>
                        <Card.Text style={{color: '#fff'}}>
                        Bangladesh, Chatmohor, Pabna, PO Office 6630 <br />
                        Phone: +88 01728 536054 <br />
                        Email: mostafizshabbir@gmail.com <br />
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="col-md-3 col-lg-3">
                    <Card className="border-0">
                        <Card.Body className="text-light">
                        <Card.Title className="text-uppercase mb-4">Subscribe Now!</Card.Title>
                            <div className="row">
                                <div className="col-md-12">
                                    <input name="name" id="name" type="text" placeholder="Enter Your Email Address..." />
                                </div>
                            </div>
                            <ul className='footer-follow-us mt-3'>
                                <li><a rel="noreferrer" target="_blank" href="http://facebook.com">{Facebook}</a></li>
                                <li><a rel="noreferrer" target="_blank" href="http://twitter.com">{Twitter}</a></li>
                                <li><a rel="noreferrer" target="_blank" href="https://www.instagram.com">{Instagram}</a></li>
                                <li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com">{Linkedin}</a></li>
                                <li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com">{Youtube}</a></li>
                            </ul>
                        
                        </Card.Body>
                    </Card>
                    </div>
                </Row>
                
            </Container>
            <div className="text-light p-2 text-center" style={{backgroundColor: '#09293F'}}> 
                <p className="p-0 m-0"> <small>Copyright &copy; 2022 | All Right Reserved By <a className="text-white" rel="noreferrer" target="_blank" href="https://zara-clinic.web.app/">Md. Mostafizur Rahman</a> </small> </p>
            </div>
        </div>
    );
};

export default Footer;