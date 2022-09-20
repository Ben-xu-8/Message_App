import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setErr(true);
    }
  };

  const handleError = () => {
    setErr(false);
  };

  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='error'>
          {err && <span>Invalid Email or Password</span>}
        </div>
        <img src='/logo.png' alt='' className='title' />
        <span className='title'>
          <b>Login Connect Chat Account</b>
        </span>
        <form onSubmit={handleSubmit} onChange={handleError}>
          <input type='text' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button>Sign In</button>
        </form>
        <span className='title'>
          <b>
            Dont Have an Account?{' '}
            <Link to='/register' style={{ textDecoration: 'none' }}>
              Register
            </Link>
          </b>
        </span>
      </div>
    </div>
  );
};

export default Login;
