import React from 'react';
import './App.css';
import ParentCard from './component/parentcard';

import Parentcomponet from './component/parentcomponent';




  function App(){
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a href="/" className='navbar-brand'>React with component intraction</a>
        </nav>
        {/* <Parentcomponet/> */}
        <ParentCard/>
        
      
      
        
          
      </div>
    );
  
  }

export default App;
