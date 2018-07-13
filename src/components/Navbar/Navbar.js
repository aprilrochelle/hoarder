import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebaseReq/auth';
import './Navbar.css';

class Navbar extends React.Component {
  render () {
    const { authed, rollOut } = this.props;
    const logoutClick = () => {
      auth.logoutUser();
      rollOut();
    };

    return (
      <div className="Navbar">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/" className="navbar-brand">React Hoarder</Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              {
                authed ? (
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <Link to="/allstuff">All Stuff</Link>
                    </li>
                    <li>
                      <Link to="/mystuff">My Stuff</Link>
                    </li>
                    <li className="navbar-form">
                      <button
                        onClick={logoutClick}
                        className="btn btn-success"
                      >
                        Log Out
                      </button>
                    </li>
                  </ul>
                ) : (
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                  </ul>
                )
              }
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
