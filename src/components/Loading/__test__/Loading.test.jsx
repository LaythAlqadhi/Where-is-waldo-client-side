import React from 'react';
import { render } from '@testing-library/react';
import { GameContext } from '../../../GameContext';
import Loading from '../Loading';

it('renders Loading component correctly', () => {
  const { asFragment } = render(
    <GameContext.Provider value={{ state: { loading: true, error: null } }}>
      <Loading />
    </GameContext.Provider>,
  );

  expect(asFragment()).toMatchSnapshot();
});
