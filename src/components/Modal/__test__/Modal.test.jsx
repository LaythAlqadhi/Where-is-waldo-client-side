import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { GameContext } from '../../../GameContext';
import Modal from '../Modal';

it('renders Modal component correctly', async () => {
  render(
    <MemoryRouter>
      <GameContext.Provider
        value={{
          state: { loading: false, error: null },
          status: { isStarted: true, isEnded: false },
          setState: vi.fn(),
          setStatus: vi.fn(),
        }}
      >
        <Modal id="mockId" />
      </GameContext.Provider>
    </MemoryRouter>,
  );

  expect(screen.container).toMatchSnapshot();

  userEvent.type(screen.getByPlaceholderText('John Doe'), 'John Doe');

  expect(screen.container).toMatchSnapshot();

  userEvent.click(screen.getByText('Submit'));

  expect(screen.container).toMatchSnapshot();

  userEvent.click(screen.getByText('Cancel'));

  expect(screen.container).toMatchSnapshot();
});
