import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Counter from './Counter';

describe('Counter component', () => {
  test('should render counter: 0', () => {
    render(<Counter />);

    const initialText = screen.getByRole('heading', { name: /counter: 0/i });

    // ASSERT
    expect(initialText).toBeVisible();
    expect(initialText).toBeInTheDocument();
    expect(initialText).toHaveTextContent('counter: 0');
  });

  test('should render increment button', () => {
    render(<Counter />);

    const button = screen.getByRole('button', { name: /increment/i });

    // ASSERT
    expect(button).toBeVisible();
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('increment');
  });
  test('should increment counter when click on the button', async () => {
    render(<Counter />);

    const button = screen.getByRole('button', { name: /increment/i });

    const display = screen.getByRole('heading', {
      name: /counter: 0/i,
    });

    expect(display).toHaveTextContent('counter: 0');
    await userEvent.click(button);
    await userEvent.click(button);
    // ASSERT

    //screen.debug(display);

    expect(display).toHaveTextContent('counter: 2');
    await userEvent.click(button);
    expect(display).toHaveTextContent('counter: 3');
  });
});

// ACT
//await userEvent.click(screen.getByText('Load Greeting'));
//await screen.findByRole('heading');
//screen.getByRole('heading');
