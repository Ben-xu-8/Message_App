import React from 'react';
import NavBar from './NavBar';
import Search from './Search';
import Contact from './Contact';

const SideBar = () => {
  return (
    <div className='sidebar'>
      <NavBar />
      <Search />
      <Contact />
    </div>
  );
};

export default SideBar;
