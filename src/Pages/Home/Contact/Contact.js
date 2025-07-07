import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Col, Container, Row, Button, Alert } from "react-bootstrap";
import {
  faEnvelope,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Phone = <FontAwesomeIcon icon={faPhone} />;
const map = <FontAwesomeIcon icon={faMapMarker} />;
const Envelope = <FontAwesomeIcon icon={faEnvelope} />;

const Contact = () => {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_rve378d", "template_tb8b5n4", form.current, {
        publicKey: "ZayMgffrR7f8ZDh2d",
      })
      .then(
        () => {
          setShowAlert(true);
          form.current.reset();
          setTimeout(() => setShowAlert(false), 3000); // auto-close after 3 sec
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="contact-page my-5 pb-5">
      <div id="contact">
        <Container>
          <Row className="justify-content-center">
            <Col className="col-xl-6 col-lg-7 col-md-9 text-center">
              <div className="heading_s1">
                <h2>Contact Me</h2>
              </div>
            </Col>
          </Row>
          <Row className="row align-items-center">
            <div className="col-md-4 text-center">
              <div className="icon_box icon_box_style_2 box_dark radius_box_10">
                <div className="box_icon mb-3">{map}</div>
                <div className="icon_box_content">
                  <h5 className="text-uppercase py-md-2">Address</h5>
                  <p>Chatmohar, Pabna, Bangladesh</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="icon_box icon_box_style_2 box_dark radius_box_10">
                <div className="box_icon mb-3">{Phone}</div>
                <div className="icon_box_content">
                  <h5 className="text-uppercase py-md-2">Phone</h5>
                  <p>+8801728536054</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="icon_box icon_box_style_2 box_dark radius_box_10">
                <div className="box_icon mb-3">{Envelope}</div>
                <div className="icon_box_content">
                  <h5 className="text-uppercase py-md-2">Email</h5>
                  <p>mostafizshabbir@gmail.com</p>
                </div>
              </div>
            </div>
          </Row>
          <Row className="row">
            <div className="col-12">
              <div className="medium_divider clearfix"></div>
            </div>
          </Row>
          <Row className="row">
            <div className="col-md-6">
              {showAlert && (
                <Alert
                  variant="success"
                  onClose={() => setShowAlert(false)}
                  dismissible
                >
                  ✅ Your message has been sent successfully!
                </Alert>
              )}
              <form ref={form} onSubmit={sendEmail} id="contact-form">
                <div className="row contact-row">
                  <div className="col-md-6 contact-name">
                    <input
                      name="user_name"
                      id="name"
                      type="text"
                      placeholder="Name*"
                    />
                  </div>
                  <div className="col-md-6 contact-email">
                    <input
                      name="user_email"
                      id="mail"
                      type="email"
                      placeholder="E-mail*"
                    />
                  </div>
                </div>
                <input
                  name="user_subject"
                  id="subject"
                  type="text"
                  placeholder="Subject"
                />
                <textarea
                  name="message"
                  id="comment"
                  placeholder="Message"
                ></textarea>

                <Button
                  type="submit"
                  size="md"
                  className="zara-btn"
                  variant="primary"
                >
                  Send Message
                </Button>
                <div id="msg" className="message"></div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="contact_map mt-4 mt-md-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7276.590568562585!2d89.287109!3d24.231449!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x408e16348bd1d77b!2sChatmohar%20Thana!5e0!3m2!1sen!2sbd!4v1633315022801!5m2!1sen!2sbd"
                  title="contact map"
                  width="100%"
                  height="450"
                ></iframe>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
