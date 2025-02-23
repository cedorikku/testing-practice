import { calculator } from '../src/calculator';

test('adds numbers', () => {
    expect(calculator.add(1, 1)).toEqual(2);
});

test('subtracts numbers', () => {
    expect(calculator.subtract(1, 1)).toEqual(0);
});

test('divides numbers', () => {
    expect(calculator.divide(1, 1)).toEqual(1);
});

test('multiplies numbers', () => {
    expect(calculator.multiply(1, 1)).toEqual(1);
});
