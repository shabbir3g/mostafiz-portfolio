import React from "react";
import { Container, Row } from "react-bootstrap";
import about from "../../../images/about-us.jpg";

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
            Hi, I’m Md. Mostafizur Rahman — a dedicated WordPress and LMS
            specialist with a passion for building high-converting membership
            and e-learning platforms that deliver real business results. With
            over 8 years of experience, I’ve successfully completed 200+ custom
            WordPress projects for clients in 25+ countries, helping them grow
            their online presence, sell courses, and streamline user engagement.
            <br></br>
            <br></br>
            <b>🏆 Credentials & Achievements: </b>
            <br></br>
            <ul>
              <li className="list-group-item">
                ☛ Level 2 Seller on Fiverr with a 5.0★ rating and 97+ client
                reviews.
              </li>
              <li className="list-group-item">
                ☛ Top Rated Freelancer on Upwork, with 43 completed projects
              </li>
              {/* <li>
                ☛ Developer of “Login Prime”, a secure login & registration
                plugin available on WordPress.org
              </li> */}
              <li className="list-group-item">
                ☛ Skilled in Shopify app development using Remix + React
              </li>
              <li className="list-group-item">
                ☛ Contributor to Shopify Checkout UI Extensions{" "}
              </li>
            </ul>
            <div>
              Whether you’re launching an LMS site, a membership system, or need
              advanced WordPress development — I bring deep expertise, strong
              communication, and a results-driven mindset to every project.
            </div>{" "}
            <br></br>
            <div>Let’s build something impactful together.</div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-md-right">
            <a
              href="Resume-of-Md-Mostafizur-Rahman.pdf"
              className="zara-btn btn btn-primary btn-radius"
            >
              My Resume
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
                    <p>+8801728536054</p>
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
