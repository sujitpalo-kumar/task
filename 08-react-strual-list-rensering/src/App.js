import React from 'react';
import './App.css';
import CustomerList from './component/Customerlist';
import Employesslist from './component/Employeelist';
import HobbySelector from './component/Hobbyselector';
import HobbySelectRadio from './component/Hobbyselectradio';
import UserMessage from './component/Usermessage';




  function App(){
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a href="/" className='navbar-brand'>React with Props & State</a>
        </nav>
      
        {/* <CustomerList/> */}
        {/* <Employesslist/> */}
        {/* <HobbySelector/> */}
        <HobbySelectRadio/>
        <UserMessage/>

       
        
          
      </div>
    );
  
  }

export default App;
