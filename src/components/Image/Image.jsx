import React from 'react';
import PropTypes from 'prop-types';
import imgSrc from '../../assets/image.jpeg';
import style from './Image.module.css';

function Image({ setPosition, focus, setFocus }) {
  const handleCoordinates = (e) => {
    setFocus(!focus);

    const rect = e.target.getBoundingClientRect();

    const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100;

    setPosition({ x: xPercent, y: yPercent });
  };
  return (
    <img
      className={style.image}
      src={imgSrc}
      alt=""
      onClick={handleCoordinates}
    />
  );
}

Image.propTypes = {
  setPosition: PropTypes.func.isRequired,
  focus: PropTypes.bool.isRequired,
  setFocus: PropTypes.func.isRequired,
};

export default Image;
