import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../../../images/logo.png'

const Header = () => {

    return (
        <div>

        
        <Navbar collapseOnSelect expand="lg" >
        <Container className="header-container">
        <Navbar.Brand as={Link} to="/">
      <img
            src={logo}
            className="d-inline-block align-top header-logo"
            alt="Zara Clinic"
        /> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>





        </div>
    );
};

export default Header;