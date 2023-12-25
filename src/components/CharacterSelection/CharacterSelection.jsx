import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import castawayTomImgSrc from '../../assets/castaway-tom.jpeg';
import loveyDoveyCoupleImgSrc from '../../assets/lovey-dovey-couple.jpeg';
import thiefImgSrc from '../../assets/thief.jpeg';
import { GameContext } from '../../GameContext';
import style from './CharacterSelection.module.css';

const characterImages = {
  'Castaway Tom': castawayTomImgSrc,
  'Lovey-dovey couple': loveyDoveyCoupleImgSrc,
  Thief: thiefImgSrc,
};

function CharacterSelection({
  id,
  focus,
  setFocus,
  position,
  setCharacters,
  characters,
}) {
  const { state, setState, setStatus, setMessage } = useContext(GameContext);

  const handleSelectCharacter = (charName) => {
    setFocus(!focus);

    const fetchData = async () => {
      const API_URL = 'https://where-is-waldo.adaptable.app/v1';

      try {
        setState({ ...state, loading: true });

        const response = await fetch(`${API_URL}/validate/${id}`, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: charName,
            coordinates: {
              x: position.x,
              y: position.y,
            },
          }),
        });

        if (response.status >= 400) {
          throw new Error('Server error');
        }

        const result = await response.json();

        if (result.characters) {
          setCharacters(result.characters);

          if (result.characters.length === 0) {
            setStatus({ isStarted: false, isEnded: true });
          }
        }

        setMessage(result.message);
      } catch (err) {
        setState({ ...state, error: err.message });
      } finally {
        setState({ ...state, loading: false });
      }
    };

    fetchData();
  };

  const shouldFlipMenu = position.x !== null && position.x > 50;

  return (
    focus &&
    position.y >= 0 &&
    position.x >= 0 && (
      <div
        className={style.menu}
        style={{
          visibility: 'visible',
          top: `${position.y}%`,
          left: shouldFlipMenu
            ? `calc(${position.x}% - 175px)`
            : `${position.x}%`,
        }}
      >
        {characters &&
          characters.map((char) => (
            <div
              key={char._id}
              onClick={() => handleSelectCharacter(char.name)}
            >
              <img src={characterImages[char.name]} alt="" />
              <span>{char.name}</span>
            </div>
          ))}
      </div>
    )
  );
}

CharacterSelection.propTypes = {
  id: PropTypes.string,
  focus: PropTypes.bool.isRequired,
  setFocus: PropTypes.func.isRequired,
  position: PropTypes.object.isRequired,
  setCharacters: PropTypes.func.isRequired,
  characters: PropTypes.array,
};

CharacterSelection.defaultProps = {
  id: null,
  characters: null,
};

export default CharacterSelection;
