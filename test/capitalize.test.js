import { capitalize } from '../src/capitalize';

test('capitalizes first letter of a text', () => {
    expect(capitalize('haha')).toBe('Haha');
});

test('works against no inputs', () => {
    expect(capitalize()).toBeNull();
    expect(capitalize('')).toBeNull();
});
