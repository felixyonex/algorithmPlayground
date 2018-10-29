import { PolygonalChain } from '../polygonalChain';

describe('Sequence Find Sum Test', () => {
  test('test 1', () => {
    const polygonalChain = new PolygonalChain();
    const inputArr = [[2, 1], [2, 2], [3, 1]];
    expect(polygonalChain.verticesInChain(inputArr)).toEqual([[2, 1], [2, 2], [3, 1]]);
    expect(polygonalChain.verticesInCloseShape(inputArr)).toEqual([[2, 1], [2, 2], [3, 1], [2, 1]]);
  });

  test('test 2', () => {
    const polygonalChain = new PolygonalChain();
    const inputArr = [[2, 7], [1, 5], [4, 5], [3, 3], [5, 5]];
    expect(polygonalChain.verticesInChain(inputArr)).toEqual([[1, 5], [2, 7], [3, 3], [4, 5], [5, 5]]);
    expect(polygonalChain.verticesInCloseShape(inputArr)).toEqual([[1, 5], [2, 7], [5, 5], [4, 5], [3, 3], [1, 5]]);
  });

  test('test 3', () => {
    const polygonalChain = new PolygonalChain();
    const inputArr = [[2, 7], [1, 5], [4, 5], [3, 3], [5, 5]];
    expect(polygonalChain.polygonalChainAngle(inputArr)).toEqual([[1, 5], [3, 3], [4, 5], [5, 5], [2, 7], [1, 5]]);
  });

});
