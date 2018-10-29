import { Segment } from '../segment';

describe('Segment max joint length', () => {
  test('test 1', () => {
    const result = new Segment().maxJointLength([[1, 2], [2, 3], [3, 4]]);
    expect(result).toEqual(3);
  });
  test('test 2', () => {
    const result = new Segment().maxJointLength([[1, 2], [4, 6], [5, 10]]);
    expect(result).toEqual(6);
  });
  test('test 3', () => {
    const result = new Segment().maxJointLength([[21, 32], [1, 10], [2, 4], [3, 5], [11, 20]]);
    expect(result).toEqual(11);
  });
  test('test 4', () => {
    const result = new Segment().maxJointLength([[31, 32], [21, 31], [18, 22], [2, 5], [5, 17]]);
    expect(result).toEqual(15);
  });
  test('test 5', () => {
    const result = new Segment().maxJointLength([[1, 5], [2, 3], [4, 6]]);
    expect(result).toEqual(5);
  });

});

describe('FindX', () => {
  test('test 1', () => {
    const result = new Segment().findX([[1, 10], [2, 11], [3, 12]]);
    expect(result).toEqual([[3, 10]]);
  });
  test('test 2', () => {
    const result = new Segment().findX([[1, 10], [2, 11], [3, 12], [4, 9], [3, 8]]);
    expect(result).toEqual([[4, 8]]);
  });
  test('test 3', () => {
    const result = new Segment().findX([[1, 10], [2, 11], [3, 12], [4, 9], [5, 8]]);
    expect(result).toEqual([[5, 8]]);
  });
  test('test 4', () => {
    const result = new Segment().findX([[4, 6], [1, 3], [2, 4], [3, 5]]);
    expect(result).toEqual([[2, 3], [3, 4], [4, 5]]);
  });

});
