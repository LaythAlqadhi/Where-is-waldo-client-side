import React from 'react';
import { render } from '@testing-library/react';
import Image from '../Image';

it('renders Image component correctly', () => {
  const setPosition = jest.fn();
  const setFocus = jest.fn();

  const { asFragment } = render(
    <Image setPosition={setPosition} focus={false} setFocus={setFocus} />,
  );

  expect(asFragment()).toMatchSnapshot();
});
