import React, { useContext } from 'react';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MessageLog from './MessageLog';
import Send from './Send';
import { UserContext } from '../Context/UserContext';

const Chat = () => {
  const { data } = useContext(UserContext);
  return (
    <div className='chat'>
      <div className='chatTitle'>
        <span>{data.user?.displayName}</span>
        <div className='chatIcons'>
          <VideocamIcon />
          <PersonAddIcon />
          <MoreHorizIcon />
        </div>
      </div>
      <MessageLog />
      <Send />
    </div>
  );
};

export default Chat;
