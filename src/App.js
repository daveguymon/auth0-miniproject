import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Login from './Components/Login/Login';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Route component={ Login } path='/' exact />
        </div>
      </HashRouter>
    );
  }
}

export default App;
