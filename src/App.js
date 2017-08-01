import React, {Component} from 'react';
import {Link} from 'react-router';
import './App.css';
import {browserHistory} from 'react-router'

class App extends Component {

  handleLogout() {
    localStorage.removeItem('ask-it-token');
    browserHistory.push('/login');
  }
  render() {
    let isLoggedin = localStorage.getItem('ask-it-token') || false;
    return (
      <div className="App">

        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="">
            <Link to={`/questions`}>MOP Ask.it</Link>
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="">
                  <Link activeClassName="active" to={`/questions`}>Questions</Link>
                </a>
              </li>
              {isLoggedin
                ? <li className="nav-item">
                    <a className="nav-link" href="">
                      <Link activeClassName="active" to={`/my-questions`}>
                        My Questions</Link>
                    </a>
                  </li>
                : ''}
              {isLoggedin
                ? <li className="nav-item">
                    <a className="nav-link" href="">
                      <Link activeClassName="active" to={`/profile`}>Profile</Link>
                    </a>
                  </li>
                : ''}
              {!isLoggedin
                ? <li className="nav-item">
                    <a className="nav-link" href="">
                      <Link activeClassName="active" to={`/registration`}>Register</Link>
                    </a>
                  </li>
                : ''}
              {!isLoggedin
                ? <li className="nav-item">
                    <a className="nav-link" href="#">
                      <Link activeClassName="active" to={`/login`}>Login</Link>
                    </a>
                  </li>
                : ''}
            </ul>
          </div>
          {isLoggedin
            ? <span className="nav-item float-right">
                <a className="nav-link" href="#" onClick={() => this.handleLogout()}>Logout</a>
              </span>
            : ''}
        </nav>

        <div className="container">
          {this.props.children}
        </div>

      </div>

    );
  }
}

export default App;
