import React from 'react';
import logo from './logo.svg';
import { homepage } from './homepage.const.js';
import './App.css';
import Background from './components/backgroung';
import Header from './components/Header';
import Hero from './components/Hero';
import CTAComponent from './components/CTA';
import OurServices from './components/OurServices';
import ourProjects from './components/OurProjects';
import BlogList from './components/BlogList';
import Footer from './components/Footer';

function App() {
  return (


<div>
      < Background />
      
        <Header logo={} menu={} />
        <Hero {} />

        <CTAComponent {...CTA} />
        <OurServices {...ourServices} />
        <OurProjects {...ourProjects} />
        <CTAComponent {} />
        <BlogList {...blogs} />
        <Footer {...contact} {...contactDetails} />
      </div>
 
  );
}

export default App;
