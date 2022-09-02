import React from 'react';
import './App.css';
import StudentCard from './component/studentcard';
import WishCard from './component/wishcard';
import Wishmessage from './component/wishmessage';


  function App(){
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a href="/" className='navbar-brand'>React with Props & State</a>
        </nav>
        <Wishmessage msg="good morning"/>


        <WishCard msg="good Afternoon"/>

         <StudentCard/>
          
      </div>
    );
  
  }

export default App;
