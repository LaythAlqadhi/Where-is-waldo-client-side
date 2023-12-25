import React, { useState, useEffect, useContext } from 'react';
import { GameContext } from '../../GameContext';

function Timer() {
  const { status } = useContext(GameContext);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;

    if (status.isStarted) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      setTime(0);
    }

    return () => clearInterval(interval);
  }, [status.isStarted]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(
      minutes,
    ).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;

    return formattedTime;
  };

  return <span aria-label="Timer">{formatTime(time)}</span>;
}

export default Timer;
