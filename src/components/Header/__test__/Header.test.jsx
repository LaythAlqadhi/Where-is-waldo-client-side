import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { GameContext } from '../../../GameContext';
import Header from '../Header';

it('renders Header component correctly', () => {
  const setStatus = vi.fn();

  const { asFragment } = render(
    <MemoryRouter>
      <GameContext.Provider
        value={{ status: { isStarted: true, isEnded: false }, setStatus }}
      >
        <Header timer={<div>00:00:00</div>} />
      </GameContext.Provider>
    </MemoryRouter>,
  );

  expect(asFragment()).toMatchSnapshot();
});
