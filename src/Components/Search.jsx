import React from 'react';

const Search = () => {
  return (
    <div className='search'>
      <div className='searchfield'>
        <input type='text' placeholder='Find User' />
      </div>
      <div className='otherUser'>
        <img
          src='https://i.kym-cdn.com/entries/icons/original/000/020/110/Lord_farquaad_banner.jpg'
          alt='hi'
          className='userProfile'
        />
        <div className='userNameInfo'>
          <span>Farquod</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
