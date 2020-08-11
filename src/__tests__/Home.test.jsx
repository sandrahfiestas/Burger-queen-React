import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Home', () => {
  test('renders component Menu', async () => {
    render(<App />);
    const button = await screen.findByRole('button', { name: 'icon_menu MENÚ' });
    fireEvent.click(button);

    const title = await screen.findByText('ORDEN DE PEDIDO');
    expect(title).toBeVisible();
  });

  // test('renders component Kitchen', async () => {
  //   render(<App />);
  //   const button = await screen.findByRole('button', { name: 'icon_burger COCINA' });
  //   fireEvent.click(button);

  //   const title = await screen.findByText('COCINA');
  //   expect(title).toBeVisible();
  // });
});
