import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { GameContext } from '../../../GameContext';
import Game from '../Game';

const mockData = {
  id: 'mockId',
  characters: {
    name: 'mockCharacter',
    coordinates: {
      x: 50,
      y: 50,
    },
  },
};

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
      status: 200,
    }),
  );
});

it('renders Game component correctly with mock data', () => {
  const setState = vi.fn();

  render(
    <GameContext.Provider
      value={{
        state: { loading: false, error: null },
        setState,
        status: { isStarted: true, isEnded: false },
      }}
    >
      <Game />
    </GameContext.Provider>,
  );

  expect(screen.container).toMatchSnapshot();
});
