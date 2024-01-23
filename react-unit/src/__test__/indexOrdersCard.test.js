import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import OrdersCard from '../Components/OrdersCard/index';

// Mocking the external library component
jest.mock('@heroicons/react/24/solid', () => ({
  ChevronRightIcon: () => <div data-testid="chevron-right-icon" />,
}));

describe('OrdersCard Component', () => {
  test('renders OrdersCard with correct props', () => {
    const totalPrice = 50;
    const totalProducts = 3;

    render(<OrdersCard totalPrice={totalPrice} totalProducts={totalProducts} />);

    // Assert that the component renders with the correct props
    expect(screen.getByText(`${totalProducts} articles`)).toBeInTheDocument();
    expect(screen.getByText(`$${totalPrice}`)).toBeInTheDocument();
  });

  test('renders ChevronRightIcon', () => {
    render(<OrdersCard totalPrice={50} totalProducts={3} />);
    
    // Assert that ChevronRightIcon is rendered
    expect(screen.getByTestId('chevron-right-icon')).toBeInTheDocument();
  });
});
