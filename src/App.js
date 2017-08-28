import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import keys from './keys';
import Auth0Lock from 'auth0-lock';
import Home from './Components/Home';

class App extends Component {

  componentWillMount() {
        this.lock = new Auth0Lock(keys.clientID, keys.domain);
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Home lock={this.lock} />
      </div>
    );
  }
}

export default App;
