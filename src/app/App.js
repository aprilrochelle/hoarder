import React, { Component } from 'react';
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';
import './App.css';

import AllStuff from '../components/AllStuff/AllStuff';
import Home from '../components/Home/Home';
// import Items from '../components/Items/Items';
import Login from '../components/Login/Login';
// import MyStuff from '../components/MyStuff/MyStuff';
import Navbar from '../components/Navbar/Navbar';
import Register from '../components/Register/Register';
// import SingleItem from '../components/SingleItem/SingleItem';
import firebase from 'firebase';
import fbConnect from '../firebaseReq/connection';
fbConnect();

const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: {from: props.location} }}
          />
        )
      }
    />
  );
};

const PublicRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/allstuff', state: {from: props.location} }}
          />
        )
      }
    />
  );
};

class App extends Component {
  state = {
    authed: false,
  }

  componentDidMount () {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({authed: true});
      } else {
        this.setState({authed: false});
      }
    });
  }

  componentWillUnmount () {
    this.removeListener();
  }

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar
              authed={this.state.authed}
            />
            <div className="container">
              <div className="row">
                <Switch>
                  <Route path="/" exact component={Home}/>
                  <PublicRoute
                    path="/register"
                    authed={this.state.authed}
                    component={Register}
                  />
                  <PublicRoute
                    path="/login"
                    authed={this.state.authed}
                    component={Login}
                  />
                  <PrivateRoute
                    path="/allstuff"
                    authed={this.state.authed}
                    component={AllStuff}
                  />
                  {/* <Items />
                  <Login />
                  <MyStuff />
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
