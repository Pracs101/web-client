import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
