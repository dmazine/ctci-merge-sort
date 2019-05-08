const countInversions = require('../src/count-inversions');

test('test case #1', () => {
    const arr = [ 1, 1, 1, 2, 2 ];
    expect(countInversions(arr)).toBe(0);
});

test('test case #2', () => {
    const arr = [ 2, 1, 3, 1, 2 ];
    expect(countInversions(arr)).toBe(4);
});

test('test case #3', () => {
    const arr = [ 1, 5, 3, 7 ];
    expect(countInversions(arr)).toBe(1);
});

test('test case #4', () => {
    const arr = [ 7, 5, 3, 1 ];
    expect(countInversions(arr)).toBe(6);
});

test('test case #5', () => {
    const arr = [ 1, 3, 5, 7 ];
    expect(countInversions(arr)).toBe(0);
});

test('test case #6', () => {
    const arr = [ 3, 2, 1 ];
    expect(countInversions(arr)).toBe(3);
});
