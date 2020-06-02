import { longestWordInString } from './longestWordInString';

describe('longestWordInString', () => {
  // write your own test cases
  it("should return string with max length", () => { 
    expect(longestWordInString('this is a drama question')).toBe('question');
    expect(longestWordInString('this is a drama question is the name')).toBe('question');
  })
});
