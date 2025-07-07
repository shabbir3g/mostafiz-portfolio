import React, { useState, useEffect } from "react";
import Project from "./Project/Project";

const Projects = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-5">
      <section id="projects" className="pb_70 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-9 text-center">
              <div
                className="heading_s1 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.02s"
              >
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
              <ul
                className="list_none grid_filter filter_tab1 filter_white animation"
                data-animation="fadeInUp"
                data-animation-delay="0.04s"
              >
                <li>
                  <a href="/#" className="current" data-filter="*">
                    all
                  </a>
                </li>
                <li>
                  <a href="/#" data-filter=".react">
                    React JS
                  </a>
                </li>
                <li>
                  <a href="/#" data-filter=".lms">
                    LMS Website
                  </a>
                </li>
                <li>
                  <a href="/#" data-filter=".wordpress">
                    WordPress
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul
                className="grid_container gutter_medium work_col3 portfolio_gallery portfolio_style1 animation masonry"
                data-animation="fadeInUp"
                data-animation-delay="0.04s"
              >
                <li className="grid-sizer">
                  {services.slice(0, 12).map((service) => (
                    <Project service={service} key={service.id}></Project>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
