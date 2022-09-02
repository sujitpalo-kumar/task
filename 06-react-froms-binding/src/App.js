import React from 'react';
import './App.css';
import ChangeSelectBox from './component/changeselectbox';
import ChangeUserName from './component/changeusername';
import LoginForm from './component/loginfrom';
import Registration from './component/registration';
import RegistrationNew from './component/registrationnew';
import ShowPassword from './component/showpassword';
import SMSApplication from './component/smsapplication';


  function App(){
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a href="/" className='navbar-brand'>React with Props & State</a>
        </nav>
       <ChangeSelectBox/>
       <ChangeUserName/>
       <LoginForm/>
       <Registration/>
       <RegistrationNew/>
       <ShowPassword/>
       <SMSApplication/>
       
        
          
      </div>
    );
  
  }

export default App;
