import React from 'react';
import './App.css';
import DigitalWatch from './component/Digitalwatch';
import UserList from './component/Userlist';





class App extends React.Component{
   

    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                    <a href="/" className='navbar-brand'>React Examples</a>
                </nav>
                {/* <DigitalWatch/> */}
                <UserList/>

               
            </div>
        );
    }

}
export default App;
