import { Sequence } from '../sequence';

describe('Sequence Find Sum Test', () => {
  test('test 1', () => {
    const range = new Sequence().findSumS([1, 2, 3, 4, 5, 6], 11);
    expect(range).toEqual([[5, 6]]);
  });

  test('test 2', () => {
    const range = new Sequence().findSumS([1, 2, 3, 4, 5, 6], 6);
    expect(range).toEqual([[1, 3], [6, 6]]);
  });

  test('test 3', () => {
    const range = new Sequence().findSumS([1, 2, 3, 4, 5, 6], 20);
    expect(range).toEqual([[2, 6]]);
  });

  test('test 4', () => {
    const range = new Sequence().findSumS([1, 3, 3, 7, 8], 10);
    expect(range).toEqual([[3, 4]]);
  });
});

describe('Sequence max Sum Test', () => {
  test('test 1', () => {
    const maxSum = new Sequence().getMaxSubSum([1, 2, 3, 4, 5, 6]);
    expect(maxSum).toBe(21);
  });
  test('test 2', () => {
    const maxSum = new Sequence().getMaxSubSum([-1, -2, -3, -4, -5, -6]);
    expect(maxSum).toBe(-1);
  });
  test('test 3', () => {
    const maxSum = new Sequence().getMaxSubSum([-1, 2, -3, 4, -5, 6]);
    expect(maxSum).toBe(6);
  });
  test('test 4', () => {
    const maxSum = new Sequence().getMaxSubSum([-100, 10, -50, 10, 12]);
    expect(maxSum).toBe(22);
  });

  // describe('DeleteK Test', () => {
  //   test('test 1', () => {
  //     const maxSum = new Sequence().deleteK(123456, 2);
  //     expect(maxSum).toBe(3456);
  //   });
  //   test('test 2', () => {
  //     const maxSum = new Sequence().deleteK(654321, 3);
  //     expect(maxSum).toBe(654);
  //   });
  //   test('test 3', () => {
  //     const maxSum = new Sequence().deleteK(789456123, 5);
  //     expect(maxSum).toBe(9623);
  //   });
  //   test('test 4', () => {
  //     const maxSum = new Sequence().deleteK(987654321, 8);
  //     expect(maxSum).toBe(9);
  //   });

  describe('DeleteK Test', () => {
    test('test 1', () => {
      const maxSum = new Sequence().deleteK('123456', 2);
      expect(maxSum).toBe('3456');
    });
    test('test 2', () => {
      const maxSum = new Sequence().deleteK('654321', 3);
      expect(maxSum).toBe('654');
    });
    test('test 3', () => {
      const maxSum = new Sequence().deleteK('789456123', 5);
      expect(maxSum).toBe('9623');
    });
    test('test 4', () => {
      const maxSum = new Sequence().deleteK('987654321', 8);
      expect(maxSum).toBe('9');
    });
    test('test 5', () => {
      const maxSum = new Sequence().deleteK('765854357', 4);
      expect(maxSum).toBe('85457');
    });
    test('test 6', () => {
      const maxSum = new Sequence().deleteK('741258963', 5);
      expect(maxSum).toBe('8963');
    });
    test('test 7', () => {
      const maxSum = new Sequence().deleteK('99999999', 5);
      expect(maxSum).toBe('999');
    });
    test('test 8', () => {
      const maxSum = new Sequence().deleteK('999555888', 5);
      expect(maxSum).toBe('9998');
    });
  });
});
