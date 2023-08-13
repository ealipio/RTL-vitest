import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

describe('App component', () => {
  test('should render hello', () => {
    render(<App />);

    const heading = screen.getByRole('heading', {
      name: /hello/i,
    });

    // ASSERT
    expect(heading).toBeVisible();
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Hello');
  });
});
