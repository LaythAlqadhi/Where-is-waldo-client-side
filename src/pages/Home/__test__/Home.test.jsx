import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Home from '../Home';
import { GameContext } from '../../../GameContext';

it('renders Home component correctly and starts the game on button click', async () => {
  const user = userEvent.setup();
  const setStatus = vi.fn();

  render(
    <MemoryRouter>
      <GameContext.Provider value={{ status: { isStarted: false }, setStatus }}>
        <Home />
      </GameContext.Provider>
    </MemoryRouter>,
  );

  const startButton = screen.getByText('Start');
  expect(startButton).toBeInTheDocument();

  await user.click(startButton);

  expect(setStatus).toHaveBeenCalledWith({ isStarted: true });
});
