import React from 'react';
import { render, screen } from '@testing-library/react';
import Product from '../components/Product';

describe('ProductList ', () => {
  test('Debería encontrar "AGREGAR" en el componente', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    render(<Product />);
    expect(screen.getByText('AGREGAR')).toBeInTheDocument();
  });

  test('Debería encontrar "DESAYUNO" en el componente', () => {
    render(<Product />);
    expect(screen.getByText('DESAYUNO')).toBeInTheDocument();
  });

  test('Debería encontrar "ALMUERZO/CENA" en el componente', () => {
    render(<Product />);
    expect(screen.getByText('ALMUERZO/CENA')).toBeInTheDocument();
  });
});
