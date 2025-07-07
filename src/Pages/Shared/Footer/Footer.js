import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import footerLogo from "../../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Facebook = <FontAwesomeIcon icon={faFacebook} />;
const Twitter = <FontAwesomeIcon icon={faTwitter} />;
const Instagram = <FontAwesomeIcon icon={faInstagram} />;
const Linkedin = <FontAwesomeIcon icon={faLinkedin} />;

const Footer = () => {
  return (
    <div className="footer mt-0">
      <Container>
        <Row xs={1} md={4} className="g-1 py-5">
          <div className="col-md-4 col-lg-4">
            <Card className="border-0">
              <Card.Body className="text-light">
                <Link to="/">
                  <img
                    className="d-inline-block align-top footer-logo"
                    src={footerLogo}
                    alt="Footer Logo"
                  />
                </Link>
                <Card.Text style={{ color: "#fff" }}>
                  Expert in WordPress, LMS & Membership Sites <br></br> 8+ Years
                  | 200+ Projects | Trusted Worldwide
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-2 col-lg-2">
            <Card className="border-0">
              <Card.Body className="text-light">
                <Card.Title className="text-uppercase  mb-4">
                  Projects
                </Card.Title>
                <ul className="footer-services">
                  <li>
                    <a
                      href="https://zara-travel-agency.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Travel Agency
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://zara-drone.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Drone eCommerce
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://zara-resort.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Hotel & Resort
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://zara-clinic.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Clinic Website
                    </a>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 col-lg-3">
            <Card className="border-0">
              <Card.Body className="text-light">
                <Card.Title className="text-uppercase  mb-4">
                  Contact Us
                </Card.Title>
                <Card.Text style={{ color: "#fff" }}>
                  Bangladesh, Chatmohor, Pabna, PO Office 6630 <br />
                  Phone:{" "}
                  <a
                    href="https://wa.me/+8801728536054
"
                    style={{ color: "#fff" }}
                  >
                    +88 01728 536054{" "}
                  </a>
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:mostafizshabbir@gmail.com"
                    style={{ color: "#fff" }}
                  >
                    mostafizshabbir@gmail.com
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 col-lg-3">
            <Card className="border-0">
              <Card.Body className="text-light">
                <Card.Title className="text-uppercase mb-4">
                  Hire Me Now!
                </Card.Title>
                <div className="row">
                  <div className="col-md-12">
                    <ul className="footer-services">
                      <li>
                        <a
                          href="https://www.upwork.com/freelancers/~0197214aa948589ec9"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Upwork
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.fiverr.com/shabbir3g"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Fiverr
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul className="footer-follow-us mt-3">
                  <li>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.facebook.com/shabbir5g"
                    >
                      {Facebook}
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://x.com/mostafizshabbir"
                    >
                      {Twitter}
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.instagram.com/shabbir3g/"
                    >
                      {Instagram}
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.linkedin.com/in/shabbir4g/"
                    >
                      {Linkedin}
                    </a>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
      <div
        className="text-light p-2 text-center"
        style={{ backgroundColor: "#09293F" }}
      >
        <p className="p-0 m-0">
          {" "}
          <small>
            Copyright &copy; 2025 | All Right Reserved By{" "}
            <a
              className="text-white"
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/shabbir4g/"
            >
              Md. Mostafizur Rahman
            </a>{" "}
          </small>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
