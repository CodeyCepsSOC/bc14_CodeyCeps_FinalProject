import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/WalkMate coming soon!/i);
  expect(linkElement).toBeInTheDocument();
});

