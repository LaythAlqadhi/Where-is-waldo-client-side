import React from 'react';
import { render } from '@testing-library/react';
import { GameContext } from '../../../GameContext';
import Timer from '../Timer';

it('renders Timer component correctly', () => {
  const { asFragment } = render(
    <GameContext.Provider
      value={{ status: { isStarted: true, isEnded: false } }}
    >
      <Timer />
    </GameContext.Provider>,
  );

  expect(asFragment()).toMatchSnapshot();
});
