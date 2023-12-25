import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GameContext } from '../../GameContext';
import style from './Home.module.css';

function Home() {
  const { status, setStatus } = useContext(GameContext);
  return (
    <div className={style.container}>
      <button
        type="button"
        onClick={() => setStatus({ ...status, isStarted: true })}
      >
        <Link to="/game">Start</Link>
      </button>
      <button type="button">
        <Link to="/leaderboard">Leaderboard</Link>
      </button>
    </div>
  );
}

export default Home;
