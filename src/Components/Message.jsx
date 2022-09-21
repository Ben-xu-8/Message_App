import React, { useContext, useRef, useEffect } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { UserContext } from '../Context/UserContext';

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(UserContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${
        message.senderId === currentUser.uid && 'originator'
      }`}
    >
      <div className='messageSender'>
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt='hi'
        />
        <span>Just Now</span>
      </div>
      <div className='messageInfo'>
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt='hi' />}
      </div>
    </div>
  );
};

export default Message;
