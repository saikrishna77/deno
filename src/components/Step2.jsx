import React, { useState, useContext } from 'react';
import { AppContext } from './Context';
import Axios from 'axios';

const Step2 = () => {
  const [message, setMessage] = useState();
  const [URL, setURL] = useState();
  const [Title, setTitle] = useState();
  const context = useContext(AppContext);
  console.log(context.token + '----' + context.key);
  const onHandleSubmit = async (e) => {
    // e.preventDefault();
    var headers = {
      webpushrKey: context.key,
      webpushrAuthToken: context.token,
      'Content-Type': 'application/json',
    };

    var data = JSON.stringify({
      title: Title,
      message: message,
      target_url: URL,
    });

    var config = {
      method: 'post',
      url: 'https://api.webpushr.com/v1/notification/send/all',
      headers: {
        webpushrKey: context.key,
        webpushrAuthToken: context.token,
        'Content-Type': 'application/json',
      },
      data: data,
    };

    Axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <h3>Web push</h3>
      <div className='form-group'>
        <label>Title</label>
        <input
          type='text'
          className='form-control'
          placeholder='Title'
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>

      <div className='form-group'>
        <label>Message</label>
        <input
          type='text'
          className='form-control'
          placeholder='Message'
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </div>

      <div className='form-group'>
        <label>Target URL</label>
        <input
          type='text'
          className='form-control'
          placeholder='Target URL'
          onChange={(e) => {
            setURL(e.target.value);
          }}
        />
      </div>

      <button
        type='submit'
        className='btn btn-primary btn-block'
        onClick={(e) => {
          onHandleSubmit(e);
        }}
      >
        Sign Up
      </button>
      <p className='forgot-password text-right'>Log in</p>
    </div>
  );
};
export default Step2;
