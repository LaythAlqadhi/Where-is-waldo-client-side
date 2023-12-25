import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GameContext } from '../../GameContext';

function Header({ timer }) {
  const { status, setStatus } = useContext(GameContext);

  return (
    <header>
      <Link
        to="/"
        onClick={() =>
          setStatus({
            isStarted: false,
            isEnded: false,
          })
        }
        aria-label="Logo"
      >
        Dragon Charmer&apos;s Island
      </Link>
      {timer && status.isStarted && timer}
    </header>
  );
}

Header.propTypes = {
  timer: PropTypes.element,
};

Header.defaultProps = {
  timer: null,
};

export default Header;
