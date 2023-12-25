import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { GameContext } from '../../../GameContext';
import Leaderboard from '../Leaderboard';

const mockData = [
  { name: 'Player1', elapsedTime: '2:30', startTime: 1640428800000 },
];

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
      status: 200,
    }),
  );
});

it('renders Leaderboard component correctly with mock data', async () => {
  const setState = vi.fn();

  render(
    <GameContext.Provider
      value={{ state: { loading: false, error: null }, setState }}
    >
      <Leaderboard />
    </GameContext.Provider>,
  );

  expect(screen.container).toMatchSnapshot();
});
