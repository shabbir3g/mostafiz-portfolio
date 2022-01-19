import React from 'react';


const Projects = () => {
   /*  const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('/projects.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []); */
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
                                <a rel='noreferrer' target="_blank" href="https://zara-travel-agency.web.app/" className="image_link">
                                    <img src="assets/images/project-01.png" alt="images" />
                                </a>
                            </div>
                        </li>
                        <li className="grid_item wordpress">
                            <div className="portfolio_item">
                                <a rel='noreferrer' target="_blank" href="http://student-ly.com/" className="image_link">
                                    <img src="assets/images/project-06.png" alt="imageh" />
                                </a>
                            </div>
                        </li>
                        <li className="grid_item react">
                            <div className="portfolio_item">
                                <a rel='noreferrer' target="_blank" href="https://zara-clinic.web.app/" className="image_link">
                                    <img src="assets/images/project-04.png" alt="imaged" />
                                </a>
                            </div>
                        </li>
                        <li className="grid_item wordpress">
                            <div className="portfolio_item">
                                <a rel='noreferrer' target="_blank" href="https://yanabea-app.com/" className="image_link">
                                    <img src="assets/images/project-05.png" alt="imageh" />
                                </a>
                            </div>
                        </li>
                        <li className="grid_item react mern">
                            <div className="portfolio_item">
                                <a rel='noreferrer' target="_blank" href="https://zara-resort.web.app/" className="image_link">
                                    <img src="assets/images/project-03.png" alt="images" />
                                </a>
                            </div>
                        </li>
                       
                        <li className="grid_item react mern">
                            <div className="portfolio_item">
                                <a rel='noreferrer' target="_blank" href="https://zara-drone.web.app/" className="image_link">
                                    <img src="assets/images/project-02.png" alt="images" />
                                </a>
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