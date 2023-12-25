import React, { useState, useEffect, useContext } from 'react';
import { GameContext } from '../../GameContext';
import style from './Leaderboard.module.css';

function Leaderboard() {
  const { state, setState } = useContext(GameContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = 'https://where-is-waldo.adaptable.app/v1';

      try {
        setState({ ...state, loading: true });

        const response = await fetch(`${API_URL}/leaderboard`, {
          mode: 'cors',
        });

        if (response.status >= 400) {
          throw new Error('Server error');
        }

        const result = await response.json();

        setData(result);
      } catch (err) {
        setState({ ...state, error: err.message });
      } finally {
        setState({ ...state, loading: false });
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateByMS) =>
    new Date(dateByMS).toLocaleString().substr(0, 10);

  return (
    <div className={style.container}>
      <table className={style.table}>
        <thead>
          <tr className={style.row}>
            <th>Name</th>
            <th>Elapsed Time</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((item, index) => (
              <tr key={index} className={style.row}>
                <td>{item.name}</td>
                <td>{item.elapsedTime}</td>
                <td>{formatDate(item.startTime)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
