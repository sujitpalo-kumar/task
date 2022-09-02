import React from 'react';
import './App.css';
import ClassCard from './component/classcard/class card';
import FuncCard from './component/funcard/funcard';

import Messagecard from './component/wishcard/messagecard';
import WishCard  from './component/wishcard/wishcard';


  function App(){
    return (
      <div className="App">
          <h2>Welcome to React JS Root Component</h2>
          <ClassCard/> 
           <FuncCard/>
          <Messagecard/>
          <WishCard/>
          
      </div>
    );
  
  }

export default App;
