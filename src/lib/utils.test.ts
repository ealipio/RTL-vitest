import { splitCamelCase } from './utils';

describe('lib/utils', () => {
  test('splitCamelCase should works properly', () => {
    const str = 'HelloWorld';
    const expectedResult = 'Hello World';

    const result = splitCamelCase({ word: str });

    expect(result).toEqual(expectedResult);
  });
});
