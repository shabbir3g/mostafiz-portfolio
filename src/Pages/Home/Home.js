import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import About from './About/About';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <About/>
            <Projects />
            <Contact />
            <Footer/>
        </div>
    );
};

export default Home;