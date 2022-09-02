import React from 'react';
import './App.css';
import Cards from './component/cards/Cards';
import Contact from './component/contact/contact';
import Footer from './component/fotter/fotter';
import Infobox from './component/info-box/infobox';
import LandingPage from './component/landing-page/landing';
import Navbar from './component/navbar/navbar';


  function App(){
    return (
      <div className="App">
          <h2>Welcome to React JS Root Component</h2>
          <Navbar/>
          <Cards/>
          <Contact/>
        
         <Footer/>
         <Infobox/>
         <LandingPage/>
         
         
          
      </div>
    );
  
  }

export default App;
