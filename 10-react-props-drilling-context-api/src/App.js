import React from 'react';
import './App.css';
import CompA from './component/context-api/CompA';
import UserContext from './component/context-api/Usercontext';
// import ComponentA from './component/props-driling/componeta';




class App extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          userInfo : {
              author : 'NAVEEN SAGGAM',
              channel : 'UiBrains'
          }
      };
  }

  render() {
      return (
          <div className="App">
              <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                  <a href="/" className='navbar-brand'>React with Component Interaction</a>
              </nav>


              <React.Fragment>
                  <div className="card m-4">
                      <div className="card-body bg-success text-white">
                          <p className="h5">App Component</p>
                          <span>{JSON.stringify(this.state.userInfo)}</span>
                          {/* <ComponentA userInfo={this.state.userInfo}/> */}

                          <UserContext.Provider value={this.state.userInfo}>
                            <CompA/>
                          </UserContext.Provider>

                      </div>
                  </div>
              </React.Fragment>

          </div>
      );
  }

}
export default App;
