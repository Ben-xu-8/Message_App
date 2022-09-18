import React from 'react';

const NavBar = () => {
  return (
    <div className='navbar'>
      <span className='title'> Connect Chat</span>
      <div className='user'>
        <img
          src='https://cdn.vox-cdn.com/thumbor/Hqfig5_bfBpQytkl4IZzmB9V9i4=/0x0:3823x1595/920x613/filters:focal(1607x493:2217x1103):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70505683/ian_mckellan_gandalf_4k_lotr.0.jpg'
          alt=''
        />
        <span className='username'>User</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default NavBar;
