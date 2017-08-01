import React, { Component } from 'react';
import {Link} from 'react-router';
import './App.css';
import {
    browserHistory
} from 'react-router'

class App extends Component {
  handleLogout() {
    localStorage.removeItem('ask-it-token');
     browserHistory.push('/login');
  }
  render() {
    let isLoggedin =  localStorage.getItem('ask-it-token')  || false; 
    return (
      <div className="App">
          <Link to={`/questions`}>Questions</Link>
        {isLoggedin?    <Link to={`/my-questions`}> MY Questions</Link> : ''}
        {isLoggedin?  <Link to={`/profile`}>Profile</Link> : ''}
          <Link to={`/registration`}>REgister</Link>
          <Link to={`/login`}>Login</Link>
              <a href="#" onClick={() => this.handleLogout()}>Logout</a>
          {this.props.children}
    
      </div>
    );
  }
}

export default App;
