import { BinarySearch } from '../binarySearch';

describe('Sequence Find Sum Test', () => {
  test('test 1', () => {
    const result = new BinarySearch().squareRoot(100, 6);
    expect(result).toEqual('10.000000');
  });

  test('test 2', () => {
    const result = new BinarySearch().squareRoot(101, 6);
    expect(result).toEqual('10.049876');
  });

  test('test 3', () => {
    const result = new BinarySearch().squareRoot(0, 6);
    expect(result).toEqual('0');
  });
  test('test 4', () => {
    const result = new BinarySearch().squareRoot(11, 6);
    expect(result).toEqual('3.316625');
  });
  test('test 4', () => {
    const result = new BinarySearch().squareRoot(-11, 6);
    expect(result).toEqual('3.316625i');
  });
  test('test 4', () => {
    const result = new BinarySearch().squareRoot(11, 13);
    expect(result).toEqual('3.3166247903554');
  });
});
