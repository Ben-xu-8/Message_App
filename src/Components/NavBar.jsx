import React, { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from '../Context/AuthContext';

const NavBar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className='navbar'>
      <img src='/logo.png' alt='' className='title' />
      <div className='user'>
        <img src={currentUser.photoURL} alt='' />
        <span className='username'>{currentUser.displayName} </span>
        <div onClick={() => signOut(auth)}>
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
