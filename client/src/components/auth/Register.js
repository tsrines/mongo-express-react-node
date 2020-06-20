import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';

const Register = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      //TODO Come back
      setAlert('dont match', 'danger');
    } else {
      console.log('great success');
    }
  };

  return (
    <>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <form
        onSubmit={(e) => onSubmit(e)}
        className='form'
        action='create-profile.html'
      >
        <div className='form-group'>
          <input
            type='text'
            value={name}
            onChange={(e) => onChange(e)}
            placeholder='Name'
            name='name'
            required
          />
        </div>
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
        <div className='form-group'>
          <input
            value={password2}
            onChange={(e) => onChange(e)}
            type='password'
            placeholder='Confirm Password'
            name='password2'
            minLength='6'
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Register);
