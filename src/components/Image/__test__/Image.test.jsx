import React from 'react';
import { render } from '@testing-library/react';
import { vi } from 'vitest';
import Image from '../Image';

it('renders Image component correctly', () => {
  const setPosition = vi.fn();
  const setFocus = vi.fn();

  const { asFragment } = render(
    <Image setPosition={setPosition} focus={false} setFocus={setFocus} />,
  );

  expect(asFragment()).toMatchSnapshot();
});
