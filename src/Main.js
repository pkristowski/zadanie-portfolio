import React from 'react';
import logo from './logo.svg';
import { homepage } from './homepage.const.js';
import './App.css';
import Background from './components/backgroung';
import Hero from './components/Hero';
import CTAComponent from './components/CTA';
import OurServices from './components/OurServices';
import OurProjects from './components/OurProjects';
import BlogList from './components/BlogList';
import Footer from './components/Footer';

export default function App() {
 const {
     companyName,
     navigation,
     hero,
     CTA,
     ourServices,
     ourProjects,
     CTA2,
     blogs,
     contact,
     contactDetails,
     ourPartners,
 } = homepage;
 
    return (


<div>
      < Background />
      
        <Hero {...Hero} />

        <CTAComponent {...CTA} />
        <OurServices {...ourServices} />
        <OurProjects {...ourProjects} />
        <CTAComponent {...CTA2} />
        <BlogList {...blogs} />
      </div>
 
  );
}
