import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign into Your Account
      </p>
      <form onSubmit={(e) => onSubmit(e)} className='form'>
        <div className='form-group'>
          <input
            value={email}
            onChange={(e) => onChange(e)}
            type='email'
            placeholder='Email Address'
            name='email'
          />
          <small className='form-text'></small>
        </div>
        <div className='form-group'>
          <input
            value={password}
            onChange={(e) => onChange(e)}
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
          />
        </div>

        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Register</Link>
      </p>
    </>
  );
};

export default Login;
