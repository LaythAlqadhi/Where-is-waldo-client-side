import React, { useContext } from 'react';
import { GameContext } from '../../GameContext';

function Loading() {
  const { state } = useContext(GameContext);

  return <div className={`loading ${state.loading && 'active'}`} />;
}

export default Loading;
