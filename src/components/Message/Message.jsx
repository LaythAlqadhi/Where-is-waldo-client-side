import React, { useContext } from 'react';
import { GameContext } from '../../GameContext';
import style from './Message.module.css';

const backgroundColor = {
  'Oops! Wrong coordinates.': 'darkred',
  'Nice job! Character found.': 'darkGreen',
  'Congratulations! You Win!': 'darkblue',
};

function Message() {
  const { state, message, setMessage } = useContext(GameContext);

  if (message) {
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  }

  if (state.error) {
    setMessage('Something went wrong.');
  }

  return (
    message && (
      <span
        className={style.message}
        style={{
          backgroundColor: backgroundColor[message],
        }}
      >
        {message}
      </span>
    )
  );
}

export default Message;
