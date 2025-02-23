import { reverseString } from '../src/reverseString.js';

test('capitalizes first letter of a text', () => {
    expect(reverseString('haha')).toBe('ahah');
    expect(reverseString('bar')).toBe('rab');
});

test('works against no inputs', () => {
    expect(reverseString('')).toBe('');
    expect(reverseString()).toBe('');
});
