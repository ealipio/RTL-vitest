import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ReplaceCamelCase from './ReplaceCamelCase';

describe('ReplaceCamelCase component', () => {
  test('should render new word', () => {
    render(<ReplaceCamelCase word="helloWorld" />);

    const newWord = 'hello World';
    const result = screen.getByText(newWord);

    //screen.debug(result);
    // ASSERT
    expect(result).toBeVisible();
    expect(result).toBeInTheDocument();
    expect(result).toHaveTextContent(newWord);
  });
});
