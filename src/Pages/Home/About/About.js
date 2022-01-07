import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import about from "../../../images/about-us.jpg";

const HandPointRight = <FontAwesomeIcon icon={faHandPointRight} />;

const padding = {
  fontSize: "16px",
  padding: "7px 0px",
};

const About = () => {
  return (
    <Container id="about">
      <div className="pt-5 pb-5">
        <Row>
          <Col xs="12" lg="6">
            <h2>About Me</h2>
            <p className="pt-3 pb-1">
            I am currently working as a React Frontend, Full Stack and WordPress Developer Upwork and Fiverr online marketplace and also I'm working as a WordPress Programmer at The Next Big Thing. My Skills are:</p>
            <div className="d-flex pt-1 pb-3">
              <div className="w-100">
                <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
                  <li style={padding}>{HandPointRight} HTML5</li>
                  <li style={padding}>{HandPointRight} CSS3</li>
                  <li style={padding}>{HandPointRight} PSD to HTML</li>
                  <li style={padding}>{HandPointRight} Tailwind</li>
                </ul>
              </div>
              <div className="w-100">
                <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
                  <li style={padding}>{HandPointRight} React JS</li>
                  <li style={padding}>{HandPointRight} MongoDB</li>
                  <li style={padding}>{HandPointRight} Material UI</li>
                  <li style={padding}>{HandPointRight} Express</li>
                </ul>
              </div>
              <div className="w-100">
                <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
                  <li style={padding}>{HandPointRight} Node JS</li>
                  <li style={padding}>{HandPointRight} WordPress</li>
                  <li style={padding}>{HandPointRight} Bootstrap</li>
                  <li style={padding}>{HandPointRight} JavaScript</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs="12" lg="6">
            <img style={{width: '100%'}} src={about} alt="" />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default About;
