import { MinAndMax } from '../minAndMax';

describe('Sequence Find Min and Max Test', () => {
  test('test 1', () => {
    const minAndMax = new MinAndMax();
    const inputArr = [10, 11, 12, 13];
    expect(minAndMax.findMinAndMax(inputArr)).toEqual([10, 13]);
    expect(minAndMax.count).toBeLessThanOrEqual(4);
  });

  test('test 2', () => {
    const minAndMax = new MinAndMax();
    const inputArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    expect(minAndMax.findMinAndMax(inputArr)).toEqual([1, 1]);
    expect(minAndMax.count).toBeLessThanOrEqual(13);
  });

  test('test 3', () => {
    const minAndMax = new MinAndMax();
    const inputArr = [3, -1, 3, 4, 6, 9, 0, 4, 10, -1, 99, 3, 12, 99];
    expect(minAndMax.findMinAndMax(inputArr)).toEqual([-1, 99]);
    expect(minAndMax.count).toBeLessThanOrEqual(19);
  });

  test('test 4', () => {
    const minAndMax = new MinAndMax();
    const inputArr = [49, 50, 48, 51, 52, 47, 46, 53, 54, 45, 55, 44, 43, 56, -1, 99];
    expect(minAndMax.findMinAndMax(inputArr)).toEqual([-1, 99]);
    expect(minAndMax.count).toBeLessThanOrEqual(22);
  });

});
