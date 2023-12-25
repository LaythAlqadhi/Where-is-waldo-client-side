import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../NotFound';

it('renders NotFound component correctly', async () => {
  render(<NotFound />);

  expect(screen.container).toMatchSnapshot();
});
