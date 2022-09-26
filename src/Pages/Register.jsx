import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, storage, db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleError = () => {
    setErr(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const password = e.target[1].value;
    const email = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, 'userChats', res.user.uid), {});
            navigate('/');
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='error'>{err && <span>Invalid Fields</span>}</div>
        <img src='/logo.png' alt='' className='title' />
        <span className='title'>
          <b>Create ConnectChat Account</b>
        </span>
        <form onSubmit={handleSubmit} onChange={handleError}>
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
          <button>Submit</button>
        </form>
        <span className='title'>
          <b>
            Have an Account?{' '}
            <Link to='/login' style={{ textDecoration: 'none' }}>
              Login
            </Link>
          </b>
        </span>
      </div>
    </div>
  );
};

export default Register;
