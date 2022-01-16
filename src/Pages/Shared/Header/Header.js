import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import logo from '../../../images/logo.png'

const Header = () => {

    return (
        <div>

        
        <Navbar className='header-top-fixed' collapseOnSelect expand="lg" >
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
            <HashLink className="nav-link"  to="/#home">Home</HashLink>
            <HashLink className="nav-link"  to="/#about">About</HashLink>
            <HashLink className="nav-link" to="/#projects">Projects</HashLink>
            <HashLink className="nav-link" to="/#contact">Contact Us</HashLink>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>





        </div>
    );
};

export default Header;