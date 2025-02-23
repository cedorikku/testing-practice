import { analyzeArray } from '../src/analyzeArray';

test('analyzes array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        max: 8,
        min: 1,
        length: 6,
    });
});

test('average value', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('average', 4);
});

test('max value', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('max', 8);
});

test('min value', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('min', 1);
});

test('length value', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('length', 6);
});
