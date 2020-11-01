import React from 'react';
import { render } from '@testing-library/react';
import GuaranteesHeader from './guaranteesHeader';

test('renders learn react link', () => {
  const { getByText } = render(<GuaranteesHeader />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
