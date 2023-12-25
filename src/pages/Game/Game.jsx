import React, { useState, useEffect, useContext } from 'react';
import Image from '../../components/Image/Image';
import Modal from '../../components/Modal/Modal';
import CharacterSelection from '../../components/CharacterSelection/CharacterSelection';
import { GameContext } from '../../GameContext';
import style from './Game.module.css';

export default function Game() {
  const { state, setState, status } = useContext(GameContext);
  const [position, setPosition] = useState({ x: null, y: null });
  const [focus, setFocus] = useState(false);
  const [id, setId] = useState(null);
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = 'https://where-is-waldo.adaptable.app/v1';

      try {
        setState({ ...state, loading: true });

        const response = await fetch(`${API_URL}/start`, { mode: 'cors' });

        if (response.status >= 400) {
          throw new Error('Server error');
        }

        const result = await response.json();

        setId(result.id);
        setCharacters(result.characters);
      } catch (err) {
        setState({ ...state, error: err.message });
      } finally {
        setState({ ...state, loading: false });
      }
    };

    if (status.isStarted) fetchData();
  }, [status.isStarted]);

  return (
    <div className={style.container}>
      <Image setPosition={setPosition} focus={focus} setFocus={setFocus} />
      {status.isEnded && <Modal id={id} />}
      <CharacterSelection
        id={id}
        focus={focus}
        setFocus={setFocus}
        position={position}
        characters={characters}
        setCharacters={setCharacters}
      />
    </div>
  );
}
