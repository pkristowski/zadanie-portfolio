import React from 'react';
import logo from './logo.svg';
import './App.css';
//import jakisDomyslny, { testowa, zmienna, zmienna2, zmienna3, zmienna4 } from './App.const.js';
// import HelloWorld from './components';
// import Clock from './components/clock';
// import Message from './components';
// import Click from './components';
// import Image from './components/image';
// import TwoColumns from './components/twoColumns';
// import Hooks from './components/hookss';
// import ClockHook from './components/clockHook';
// import Text from './components/Text';
// import Title from './components/Title';
// import InputTest from './components/communication';
import Main from './Main';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Blog from './Blog';
import Header from './components/Header';
import Footer from './components/Footer';
import { homepage } from './homepage.const';
import SingleBlog from './SingleBlog';


function App() {

  const {
    companyName,
    navigation,
    contact,
    contactDetails,
} = homepage


  return (
    <Router>

      <Header logo={companyName} menu={navigation} />
      <div>
        <Route exact path="/" component={Main} />
        <Route
         exact path="/blog" component={Blog}
        /> 
        <Route
          path="/blog/:id" component={SingleBlog}
        />  
        <Route
          path="/movies"
          render={({ match }) => match && <h1>Movies</h1>}
        />
        <Route
          path="/actors"
          render={({ match }) => match && <h1>Actors</h1>}
        />
      </div>

      <Footer {...contact} {...contactDetails} />

    </Router>
  );

}

export default App;