/*
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('renders App component Home', () => {
    render(<App />);

    screen.debug();
  });

  test('renders btn MENÚ', () => {
    const { getByText } = render(<App />);
    const option = getByText(/^MENÚ$/);
    expect(option).toBeInTheDocument();
  });

  test('renders btn COCINA', () => {
    const { getByText } = render(<App />);
    const option = getByText('COCINA');
    expect(option).toBeInTheDocument();
  });
});
