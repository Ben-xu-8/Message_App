import React, { useEffect, useState, useContext } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { AuthContext } from '../Context/AuthContext';
import { UserContext } from '../Context/UserContext';

const Contact = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(UserContext);

  useEffect(() => {
    const getChat = () => {
      const unsub = onSnapshot(doc(db, 'userChats', currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    currentUser.uid && getChat();
  }, [currentUser.uid]);

  const handleSelect = (e) => {
    dispatch({
      type: 'CHANGE_USER',
      payload: e,
    });
  };
  return (
    <div className='contact'>
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className='otherUser'
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img src={chat[1].userInfo.photoURL} alt='hi' />
            <div className='userNameInfo'>
              <span>{chat[1].userInfo.displayName}</span>
              <p>{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Contact;
