import React from 'react';
import style from './NotFound.module.css';

function NotFound() {
  return (
    <div className={style.container}>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFound;
