import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GameContext } from '../../GameContext';
import style from './Modal.module.css';

function Modal({ id }) {
  const navigate = useNavigate();
  const { state, setState, status, setStatus } = useContext(GameContext);
  const [name, setName] = useState('');
  const [message, setMessage] = useState(null);

  const handleClick = (e, submit) => {
    e.preventDefault();

    if (submit && name === '') {
      setMessage('Name must be not empty.');
      return;
    }
    if (name.length > 25) {
      setMessage('Name must be less than 25 characters.');
      return;
    }

    const fetchData = async () => {
      const API_URL = 'https://node.laythalqadhi.repl.co/v1';

      try {
        setState({ ...state, loading: true });

        const response = await fetch(`${API_URL}/end/${id}`, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name || null,
          }),
        });

        if (response.status >= 400) {
          throw new Error('Server error');
        }
      } catch (err) {
        setState({ ...state, error: err.message });
      } finally {
        setName('');
        setMessage(null);
        setState({ ...state, loading: false });
        setStatus({ ...status, isStarted: false, isEnded: false });

        if (submit) {
          navigate('/leaderboard');
        } else {
          navigate('/');
        }
      }
    };
    fetchData();
  };

  return (
    <div className={style.modal}>
      <form>
        <label htmlFor="user">
          Please enter your name to be included in the leaderboard.
        </label>
        <input
          type="text"
          name="user"
          id="user"
          placeholder="John Doe"
          maxLength="25"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          <button type="button" onClick={(e) => handleClick(e, true)}>
            Submit
          </button>
          <button type="button" onClick={(e) => handleClick(e, false)}>
            Cancel
          </button>
        </div>
        {message && <span>{message}</span>}
      </form>
    </div>
  );
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Modal;
