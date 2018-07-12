import React, { Component } from 'react';
import './App.css';

import AllStuff from '../components/AllStuff/AllStuff';
import Items from '../components/Items/Items';
import Login from '../components/Login/Login';
import MyStuff from '../components/MyStuff/MyStuff';
import Navbar from '../components/Navbar/Navbar';
import Register from '../components/Register/Register';
import SingleItem from '../components/SingleItem/SingleItem';

class App extends Component {
  render () {
    return (
      <div className="App">
        <AllStuff />
        <Items />
        <Login />
        <MyStuff />
        <Navbar />
        <Register />
        <SingleItem />
      </div>
    );
  }
}

export default App;
