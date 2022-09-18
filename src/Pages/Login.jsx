import React from 'react';

const Login = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <span className='logo'></span>
        <span className='title'>Create Connect Chat Account</span>
        <form>
          <input type='text' placeholder='Username' />
          <input type='password' placeholder='Password' />
        </form>
        <button>Sign In</button>
        <span className='title'>Dont Have an Account? Register</span>
      </div>
    </div>
  );
};

export default Login;
