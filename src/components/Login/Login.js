import React, { Component } from 'react';
import Cryptr from 'cryptr';
import axios from '../../axios';

import classes from './Login.module.css';
import Input from '../UI/Input/Input';
import Box from '../UI/Box/Box';
import Button from '../UI/Button/Button';

class Signup extends Component {
  state = {
    id: '',
    password: '',
    loggedin: false
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = (e) => {
    e.preventDefault();
    let body = {
      id: this.state.id,
      password: this.state.password
    }
    if (true) {
      const cryptr = new Cryptr('Education@system@sucks@100%!');
      body.password = cryptr.encrypt(body.password);
      body.id = cryptr.encrypt(body.id);
      if (true) {
        axios.post('/login', body)
          .then(r => {
            this.setState({ loggedin: true });
          })
      }
    }
  }
  render() {
    let ren = (
      <div>
        <Box>
          <div className={classes.title}>LOGIN</div>
          <form method='POST' onSubmit={this.onSubmit} >
            <Input
              name='id'
              value={this.state.id}
              onChange={this.onChange}
              placeholder='ID'
              required={true}
              minLength='5'
              maxLength='5'
            />
            <Input
              name='password'
              value={this.state.password}
              onChange={this.onChange}
              placeholder='Password'
              required={true}
              minLength='8'
              type='password'
            />
            <Button>Login</Button>
          </form>
          <div className={classes.mainDiv}>
            <div className={classes.subDiv}>
              <div className={classes.line}>Don't have an account?</div>
              <div className={classes.link}>
                <a href='/signup'>Sign Up</a>
              </div>
            </div>
          </div>
        </Box>
      </div>
    );
    if (this.state.loggedin) {
      ren = (
        <div className={classes.link}>
          Logged in!
        </div>
      )
    }
    return (
      <div>
        {ren}
      </div>
    );
  }
}

export default Signup;