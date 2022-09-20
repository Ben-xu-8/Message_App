import React from 'react';

const Message = () => {
  return (
    <div className='message originator'>
      <div className='messageSender'>
        <img
          src='https://i.kym-cdn.com/entries/icons/original/000/020/110/Lord_farquaad_banner.jpg'
          alt='hi'
        />
        <span>Just Now</span>
      </div>
      <div className='messageInfo'>
        <p>A Message</p>
        <img
          src='https://i.kym-cdn.com/entries/icons/original/000/020/110/Lord_farquaad_banner.jpg'
          alt='hi'
        />
      </div>
    </div>
  );
};

export default Message;
