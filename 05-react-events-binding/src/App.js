import React from 'react';
import './App.css';
import Grettingmessage from './component/greetingmessage';
import Greetingtwo from './component/greetingmessagetwo';
import Productitem from './component/productitem';
import WishMessage from './component/wishmessage';


  function App(){
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a href="/" className='navbar-brand'>React with Props & State</a>
        </nav>
        <Grettingmessage/>
        <Greetingtwo/>
        <Productitem/>
        <WishMessage/>
     
          
      </div>
    );
  
  }

export default App;
