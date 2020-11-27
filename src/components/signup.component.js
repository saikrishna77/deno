import React, { Component } from 'react';

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>

        <div className='form-group'>
          <label>Title</label>
          <input
            type='text'
            className='form-control'
            placeholder='First name'
          />
        </div>

        <div className='form-group'>
          <label>Message</label>
          <input type='text' className='form-control' placeholder='Last name' />
        </div>

        <div className='form-group'>
          <label>Target URL</label>
          <input
            type='email'
            className='form-control'
            placeholder='Enter email'
          />
        </div>

        <button type='submit' className='btn btn-primary btn-block'>
          Sign Up
        </button>
        <p className='forgot-password text-right'>Log in</p>
      </form>
    );
  }
}
