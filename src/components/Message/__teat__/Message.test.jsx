import React from 'react';
import { render } from '@testing-library/react';
import { vi } from 'vitest';
import { GameContext } from '../../../GameContext';
import Message from '../Message';

it('renders Message component correctly', () => {
  const { asFragment } = render(
    <GameContext.Provider
      value={{
        state: { loading: false, error: null },
        status: { isStarted: true, isEnded: false },
        setMessage: vi.fn(),
        message: 'Nice job! Character found.',
      }}
    >
      <Message />
    </GameContext.Provider>,
  );

  expect(asFragment()).toMatchSnapshot();
});
