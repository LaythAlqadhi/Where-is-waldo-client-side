import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { GameContext } from '../../../GameContext';
import CharacterSelection from '../CharacterSelection';

const mockData = {
  id: 'mockId',
  characters: [
    { _id: '1', name: 'Castaway Tom' },
    { _id: '2', name: 'Lovey-dovey couple' },
  ],
  message: 'Mock message',
};

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
      status: 200,
    }),
  );
});

it('renders CharacterSelection component correctly with mock data', async () => {
  const setState = vi.fn();
  const setCharacters = vi.fn();
  const setMessage = vi.fn();
  const setFocus = vi.fn();

  render(
    <GameContext.Provider
      value={{
        state: { loading: false, error: null },
        setState,
        status: { isStarted: true, isEnded: false },
        setStatus: vi.fn(),
        setMessage,
      }}
    >
      <CharacterSelection
        id={mockData.id}
        focus={false}
        setFocus={setFocus}
        position={{ x: 0, y: 0 }}
        setCharacters={setCharacters}
        characters={mockData.characters}
      />
    </GameContext.Provider>,
  );

  expect(screen.container).toMatchSnapshot();
});
