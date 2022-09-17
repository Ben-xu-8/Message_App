import React from 'react';

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
          <input type='file' placeholder='Insert Avatar Icon' />
        </form>
        <span>Have an Account? Login</span>
      </div>
    </div>
  );
};

export default Register;
