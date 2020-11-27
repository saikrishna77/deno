import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './Context';
import SignUp from './signup.component';

const Login = (props) => {
  //   const [file, setFile] = useState('');
  const context = useContext(AppContext);

  return (
    <form>
      <h3>Web Push</h3>

      <div className='form-group'>
        <label>YOUR REST API KEY</label>
        <input
          type='text'
          className='form-control'
          placeholder='API Key'
          onChange={(e) => {
            context.setKey(e.target.value);
          }}
        />
      </div>

      <div className='form-group'>
        <label>YOUR AUTH KEY</label>
        <input
          type='text'
          className='form-control'
          placeholder='AUTH Key'
          onChange={(e) => {
            context.setToken(e.target.value);
          }}
        />
      </div>

      <Link to='/Step2'>
        <button type='submit' className='btn btn-primary btn-block'>
          Submit
        </button>
      </Link>
      <p className='forgot-password text-right'>
        Forgot <a href='#'>password?</a>
      </p>
    </form>
  );
};
export default Login;
