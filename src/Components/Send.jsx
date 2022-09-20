import React from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';

const Send = () => {
  return (
    <div className='send'>
      <input type='text' placeholder='Send Messasge Here' />
      <div className='sendIcons'>
        <AddPhotoAlternateIcon />
        <AttachFileIcon />
        <div className='send'>
          <SendIcon />
        </div>
      </div>
    </div>
  );
};

export default Send;
