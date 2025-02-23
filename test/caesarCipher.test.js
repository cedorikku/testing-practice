import { caesarCipher } from '../src/caesarCipher';

test('encrypts', () => {
    expect(caesarCipher('uvwxyz', 3)).toBe('xyzabc');
});

test('preserves cases', () => {
    expect(caesarCipher('UvwxyZ', 3)).toBe('XyzabC');
});

test('preserves non-alphabetical', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
