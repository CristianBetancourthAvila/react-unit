import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../Pages/App/index';

test('renders without crashing', () => {
  render(<App />);
});

test('renders Home component when "/" route is active', () => {
  const { getByText } = render(<App />);
  const homeElement = getByText(/Home/i);
  expect(homeElement).toBeInTheDocument();
});

// Agrega más pruebas según sea necesario para cubrir otros casos y funcionalidades.
