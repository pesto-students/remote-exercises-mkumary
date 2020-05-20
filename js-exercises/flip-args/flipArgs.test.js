// write your own test cases

import { flipArgs } from './flipArgs';

describe('flipArgs', () => {
  it('should return a function', () => {
    expect(typeof flipArgs()).toBe('function');
  });
  it('the flipArgs should return reversed params', () => {
      const foo = (x, y) => x - y;
    const flipArgsFunction = flipArgs(foo);
      expect(flipArgsFunction(3, 5)).toBe(2);
  });
});
