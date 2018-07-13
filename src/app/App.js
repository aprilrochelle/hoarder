import React, { Component } from 'react';
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';
import './App.css';

// import AllStuff from '../components/AllStuff/AllStuff';
import Home from '../components/Home/Home';
// import Items from '../components/Items/Items';
// import Login from '../components/Login/Login';
// import MyStuff from '../components/MyStuff/MyStuff';
import Navbar from '../components/Navbar/Navbar';
// import Register from '../components/Register/Register';
// import SingleItem from '../components/SingleItem/SingleItem';

class App extends Component {
  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar />
            <div className="container">
              <div className="row">
                <Switch>
                  <Route path="/" exact component={Home}/>
                  {/* <AllStuff />
                  <Items />
                  <Login />
                  <MyStuff />
                  <Register />
                  <SingleItem /> */}
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
