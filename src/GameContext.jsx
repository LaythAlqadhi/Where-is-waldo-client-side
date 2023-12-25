import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  state: { loading: false, error: null },
  status: { isStarted: false, isEnded: true },
  message: null,
};

export const GameContext = createContext(initialState);

export function GameProvider({ children }) {
  const [state, setState] = useState({ loading: false, error: null });
  const [status, setStatus] = useState({
    isStarted: false,
    isEnded: false,
    message: null,
  });
  const [message, setMessage] = useState(null);

  return (
    <GameContext.Provider
      value={{
        state,
        setState,
        status,
        setStatus,
        message,
        setMessage,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

GameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
