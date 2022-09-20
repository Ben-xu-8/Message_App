import React from 'react';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MessageLog from './MessageLog';
import Send from './Send';

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatTitle'>
        <span>Farquod</span>
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
