import React, { Component } from 'react';
import Cryptr from 'cryptr';
import axios from '../../axios';

import classes from './Signup.module.css';
import Input from '../UI/Input/Input';
import Box from '../UI/Box/Box';
import Button from '../UI/Button/Button';

class Signup extends Component {
  state = {
    fname: '',
    lname: '',
    add1: '',
    add2: '',
    id: '',
    password: '',
    signedup: false
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    let body = {
      fname: this.state.fname,
      lname: this.state.lname,
      add1: this.state.add1,
      add2: this.state.add2,
      id: this.state.id,
      password: this.state.password
    }
    if(true) {
      const cryptr = new Cryptr('Education@system@sucks@100%!');
      body.password = cryptr.encrypt(body.password); 
      body.id = cryptr.encrypt(body.id);
      console.log(body);
      if(true) {
        axios.post('/signup', body)
          .then(r => {
            this.setState({ signedup: true });
          })
          .catch(e => {
            console.log(e.response)
          })      
      }
    }
  }
  render() {
    let ren = (
      <Box width="40%" height="100%">
        <div className={classes.title}>SIGN UP</div>
        <form method='POST' onSubmit={this.onSubmit} >
            <Input 
              name='fname'
              value={this.state.fname}
              onChange={this.onChange}
              errorText={this.state.fnameError}
              placeholder='First Name'
              required={true}
            />
            <div className={classes.errorMessage}>{this.state.fnameError}</div>
            <Input 
              name='lname'
              value={this.state.lname}
              onChange={this.onChange}
              errorText={this.state.lnameError}
              placeholder='Last Name'
              required={true}
            />
            <div className={classes.errorMessage}>{this.state.lnameError}</div>
            <Input 
              name='add1'
              value={this.state.add1}
              onChange={this.onChange}
              errorText={this.state.add1Error}
              placeholder='Address1'
              required={true}
            />
            <div className={classes.errorMessage}>{this.state.add1Error}</div>
            <Input 
              name='add2'
              value={this.state.add2}
              onChange={this.onChange}
              errorText={this.state.add2Error}
              placeholder='Address2'
              required={true}
            />
            <div className={classes.errorMessage}>{this.state.add2Error}</div>
            <Input 
              name='id'
              value={this.state.id}
              onChange={this.onChange}
              errorText={this.state.idError}
              placeholder='ID'
              required={true}
              minLength='5'
              maxLength='5'
            />
            <div className={classes.errorMessage}>{this.state.idError}</div>
            <Input 
              name='password'
              value={this.state.password}
              onChange={this.onChange}
              errorText={this.state.passwordError}
              placeholder='Password'
              required={true}
              type='password'
              minLength='8'
              pattern="(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$"
              title="Must contain at least one special character and one uppercase and lowercase letter, and at least 8 or more characters"
            />
            <div className={classes.errorMessage}>{this.state.passwordError}</div>
            <Button>Sign Up</Button>
        </form>
        <div className={classes.mainDiv}>
          <div className={classes.subDiv}>
            <div className={classes.line}>Already have an account?</div>
            <div className={classes.link}>
              <a href='/login'>Login Here</a>
            </div>
          </div>
        </div>
      </Box>
    );
    if(this.state.signedup) {
      ren = (
        <div className={classes.link}>
          Signed up!
          <div className={classes.mainDiv}>
            <div className={classes.subDiv}>
              <div className={classes.link}>
                <a href='/login'>Login Here</a>
              </div>
            </div>
          </div>
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