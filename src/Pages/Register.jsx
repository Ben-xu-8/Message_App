import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Register = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <span className='logo'></span>
        <span className='title'>Create Connect Chat Account</span>
        <form>
          <input type='text' placeholder='Username' />
          <input type='password' placeholder='Password' />
          <input type='email' placeholder='Email' />
          <input
            style={{ display: 'none' }}
            type='file'
            id='file'
            className='filestyle'
          />
          <label htmlFor='file'>
            <AccountCircleIcon />
            <span>Insert Avatar Icon</span>
          </label>
        </form>
        <button>Submit</button>
        <span className='title'>Have an Account? Login</span>
      </div>
    </div>
  );
};

export default Register;
