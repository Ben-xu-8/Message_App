import { onSnapshot, doc } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../Context/UserContext';
import Message from './Message';
import { db } from '../firebase';

const MessageLog = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(UserContext);
  useEffect(() => {
    const unSub = onSnapshot(doc(db, 'chats', data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
    return () => {
      unSub();
    };
  }, [data.chatId]);
  return (
    <div className='messageLog'>
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default MessageLog;
