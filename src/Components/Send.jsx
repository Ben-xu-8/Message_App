import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage, db } from '../firebase';
import { v4 as uuid } from 'uuid';
import React, { useContext, useState, useRef } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { UserContext } from '../Context/UserContext';

const Send = () => {
  const [text, setText] = useState('');
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(UserContext);
  const inputFile = useRef(null);

  const onButtonClick = () => {
    inputFile.current.click();
  };

  const handleKey = (e) => {
    e.code === 'Enter' && handleSend();
  };

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, img);
      console.log(storageRef);
      console.log(uploadTask);

      uploadTask.on(
        (error) => {
          // setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, 'chats', data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
      setText('');
      setImg(null);
    } else {
      await updateDoc(doc(db, 'chats', data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }
    await updateDoc(doc(db, 'userChats', currentUser.uid), {
      [data.chatId + '.lastMessage']: {
        text,
      },
      [data.chatId + '.date']: serverTimestamp(),
    });

    await updateDoc(doc(db, 'userChats', data.user.uid), {
      [data.chatId + '.lastMessage']: {
        text,
      },
      [data.chatId + '.date']: serverTimestamp(),
    });

    setText('');
    setImg(null);
  };
  return (
    <div className='send'>
      <input
        type='text'
        placeholder='Send Messasge Here'
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKey}
        value={text}
      />
      <div className='sendIcons' onClick={onButtonClick}>
        <input
          type='file'
          style={{ display: 'none' }}
          ref={inputFile}
          onChange={(e) => setImg(e.target.files[0])}
        />
        <AddPhotoAlternateIcon />
      </div>
      <div className='send' onClick={handleSend}>
        <SendIcon />
      </div>
    </div>
  );
};

export default Send;
