import React from "react";
import { Container, Row } from "react-bootstrap";
import about from "../../../images/about-us.jpg";
import aboutimg from "../../../images/about-img.png";

const About = () => {
  return (
    <Container className="py-5 my-5" id="about">
      <Row
        className="row align-items-center animation"
        data-animation="fadeInUp"
        data-animation-delay="0.02s"
      >
        <div className="col-md-8">
          <div className="heading_s1">
            <h2>About Me</h2>
          </div>
          <div>
            Hello, <br></br>
            I’m Md. Mostafizur Rahman, a WordPress & LMS expert with 9+ years of
            experience building high-converting websites for global clients. I
            specialize in LMS platforms, membership sites, and custom WordPress
            solutions that drive course sales, boost engagement, and scale
            online businesses.<br></br>
            <br></br>
            Whether you need a full eLearning website with Tutor LMS or
            LearnDash, a secure membership site with Paid Memberships Pro, or a
            Figma to WordPress conversion, I bring both technical expertise and
            business insight to every project.
            <br></br>
            <br></br>
            📩 Hire me today — I’d love to help!
          </div>
        </div>
        <div className="col-md-4">
          <img
            className="rounded-circle"
            src={aboutimg}
            alt="Mostafiz Shabbir"
          />
          <div className="text-md-center mt-3">
            <a
              href="https://mostafizshabbir.blogspot.com"
              className="zara-btn btn btn-primary btn-radius"
              target="_blank"
              rel="noreferrer"
            >
              Checkout my blog
            </a>
          </div>
        </div>
      </Row>
      <div className="row">
        <div className="col-12">
          <div className="medium_divider clearfix"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <div
            className="about_img2 animation"
            data-animation="fadeInUp"
            data-animation-delay="0.02s"
          >
            <img src={about} alt="about_img" />
            <div className="border_shape2"></div>
          </div>
        </div>
        <div className="col-lg-8 col-md-12">
          <div
            className="about_info animation mx-4"
            data-animation="fadeInUp"
            data-animation-delay="0.02s"
          >
            <div className="row">
              <div className="col-md-7">
                <div className="heading_s1 mb-4">
                  <h5>Personal Information</h5>
                </div>
                <ul className="profile_info_style2 list_none">
                  <li>
                    <span className="title">Date of birth:</span>
                    <p>07 February 1991</p>
                  </li>
                  <li>
                    <span className="title">Phone No:</span>
                    <a href="https://wa.me/+8801728536054">+8801728536054</a>
                  </li>
                  <li>
                    <span className="title">Email:</span>
                    <a href="mailto:mostafizshabbir@gmail.com">
                      mostafizshabbir@gmail.com
                    </a>
                  </li>
                  <li>
                    <span className="title">Address:</span>
                    <p> Pabna, Bangladesh </p>
                  </li>
                  <li>
                    <span className="title">Website:</span>
                    <p>mostafiz.netlify.app </p>
                  </li>
                  <li>
                    <span className="title">Freelance:</span>
                    <p>Available</p>
                  </li>
                </ul>
                <ul className="list_none social_icons rounded_social socail_style1 social_white mt-3">
                  <li>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.linkedin.com/in/shabbir4g/"
                      className="sc_facebook"
                    >
                      <i className="ion-social-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/shabbir3g/"
                      className="sc_twitter"
                    >
                      <i className="ion-social-github"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.instagram.com/shabbir3g/"
                      className="sc_instagram"
                    >
                      <i className="ion-social-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.pinterest.com/shabbir4g/"
                      className="sc_pinterest"
                    >
                      <i className="ion-social-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href=" https://www.facebook.com/shabbir5g"
                      className="sc_facebook"
                    >
                      <i className="ion-social-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-5">
                <div className="heading_s1 mb-4">
                  <h5>My Skills</h5>
                </div>
                <div className="skills">
                  <div className="skill_content pr_style1">
                    <div className="progrees_bar_text">
                      <b>WordPress Theme Develpment</b>
                    </div>
                    <div className="progress">
                      <div className="count_pr">
                        <span className="counter">90</span>%
                      </div>
                      <div
                        className="progress-bar d-block"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="skill_content pr_style1">
                    <div className="progrees_bar_text">
                      <b>WordPress Plugin Develpment</b>
                    </div>
                    <div className="progress">
                      <div className="count_pr">
                        <span className="counter">60</span>%
                      </div>
                      <div
                        className="progress-bar d-block"
                        role="progressbar"
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="skill_content pr_style1">
                    <div className="progrees_bar_text">
                      <b>LMS Website Development</b>
                    </div>
                    <div className="progress">
                      <div className="count_pr">
                        <span className="counter">90</span>%
                      </div>
                      <div
                        className="progress-bar d-block"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="skill_content pr_style1">
                    <div className="progrees_bar_text">
                      <b>JavaScript</b>
                    </div>
                    <div className="progress">
                      <div className="count_pr">
                        <span className="counter">80</span>%
                      </div>
                      <div
                        className="progress-bar d-block"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="skill_content pr_style1">
                    <div className="progrees_bar_text">
                      <b>React Js</b>
                    </div>
                    <div className="progress pr_style1">
                      <div className="count_pr">
                        <span className="counter">70</span>%
                      </div>
                      <div
                        className="progress-bar d-block"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
