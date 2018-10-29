import { BagItem, DivideNIntoKParts, GetMaxCostInBag, KnapSackWithGivenWeight} from '../dynamicProgramming';

describe('Divide N Test', () => {
  test('test 1', () => {
    const result = new DivideNIntoKParts().solutionNum(10, 2);
    expect(result).toBe(5);
  });
  test('test 1.1', () => {
    const result = new DivideNIntoKParts().solutionNumImproved(10, 2);
    expect(result).toBe(5);
  });
  test('test 2', () => {
    const result = new DivideNIntoKParts().solutionNum(10, 3);
    expect(result).toBe(8);
  });
  test('test 2.1', () => {
    const result = new DivideNIntoKParts().solutionNumImproved(10, 3);
    expect(result).toBe(8);
  });
  test('test 3', () => {
    const result = new DivideNIntoKParts().solutionNum(10, 9);
    expect(result).toBe(1);
  });
  test('test 3.1', () => {
    const result = new DivideNIntoKParts().solutionNumImproved(10, 9);
    expect(result).toBe(1);
  });
  test('test 4', () => {
    const result = new DivideNIntoKParts();
    const outPut = result.solutionNum(100, 4);
    const count = result.getCount();
    // expect(count).toBe(1);
    // console.log(`recursion: n = 100; k = 4; result = ${outPut}; count = ${count}`);
  });
  test('test 4.1', () => {
    const result = new DivideNIntoKParts();
    const outPut = result.solutionNumImproved(100, 4);
    const count = result.getCount();
    // console.log(`recursion Improved: n = 100; k = 4; result = ${outPut}; count = ${count}`);
  });
  test('test 5', () => {
    const result = new DivideNIntoKParts();
    const outPut = result.solutionNum(100, 3);
    const count = result.getCount();
    // console.log(`recursion: n = 100; k = 3; result = ${outPut}; count = ${count}`);
  });
  test('test 5.1', () => {
    const result = new DivideNIntoKParts();
    const outPut = result.solutionNumImproved(100, 3);
    const count = result.getCount();
    // console.log(`recursion Improved: n = 100; k = 3; result = ${outPut}; count = ${count}`);
  });
  test('test 6', () => {
    const result = new DivideNIntoKParts();
    const outPut = result.solutionNum(200, 3);
    const count = result.getCount();
    // console.log(`recursion: n = 200; k = 3; result = ${outPut}; count = ${count}`);
  });
  test('test 6.1', () => {
    const result = new DivideNIntoKParts();
    const outPut = result.solutionNumImproved(200, 3);
    const count = result.getCount();
    // console.log(`recursion Improved: n = 200; k = 3; result = ${outPut}; count = ${count}`);
  });
});

describe('put items in bag Test', () => {
  test('test 1', () => {
    const nameArr = ['a', 'b', 'c', 'd', 'e'];
    const weightArr = [2, 2, 6, 5, 4];
    const costArr = [6, 3, 5, 4, 6];
    const bagItems: BagItem[] = [];
    for ( let i = 0; i < nameArr.length; i ++) {
      const bagItem = new BagItem(nameArr[i], weightArr[i], costArr[i]);
      bagItems[i] = bagItem;
    }
    const getMaxCostInBag = new GetMaxCostInBag();
    const result =  getMaxCostInBag.getMaxCostItems(bagItems, 9);
    expect(result).toEqual(['d', 'b', 'a']);
    // console.log(getMaxCostInBag.bagMatrix);
  });
  test('test 2', () => {
    const nameArr = ['a', 'b', 'c', 'd', 'e'];
    const weightArr = [2, 2, 6, 5, 4];
    const costArr = [6, 3, 5, 4, 6];
    const bagItems: BagItem[] = [];
    for ( let i = 0; i < nameArr.length; i ++) {
      const bagItem = new BagItem(nameArr[i], weightArr[i], costArr[i]);
      bagItems[i] = bagItem;
    }
    const getMaxCostInBag = new GetMaxCostInBag();
    const result =  getMaxCostInBag.getMaxCostItems(bagItems, 19);
    expect(result).toEqual(['e', 'd', 'c', 'b', 'a']);
    // console.log(getMaxCostInBag.bagMatrix);
  });

  test('test 2', () => {
    const nameArr = ['a', 'b', 'c', 'd', 'e'];
    const weightArr = [1, 2, 3, 3, 6];
    const costArr = [6, 3, 5, 4, 6];
    const bagItems: BagItem[] = [];
    for ( let i = 0; i < nameArr.length; i ++) {
      const bagItem = new BagItem(nameArr[i], weightArr[i], costArr[i]);
      bagItems[i] = bagItem;
    }
    const getMaxCostInBag = new GetMaxCostInBag();
    const result = getMaxCostInBag.getSumSolution(weightArr, 6);
    expect(result).toBe(4);
  });

  test('test 3', () => {
    const nameArr = ['a', 'b', 'c', 'd', 'e'];
    const weightArr = [1, 2, 3, 3, 6];
    const costArr = [6, 3, 5, 4, 6];
    const bagItems: BagItem[] = [];
    for ( let i = 0; i < nameArr.length; i ++) {
      const bagItem = new BagItem(nameArr[i], weightArr[i], costArr[i]);
      bagItems[i] = bagItem;
    }
    const getMaxCostInBag = new KnapSackWithGivenWeight();
    const result = getMaxCostInBag.findMaxCostSubsets(bagItems, 15);
    expect(result).toEqual(['a', 'b', 'c', 'd', 'e']);
  });

  test('test 4', () => {
    const nameArr = ['a', 'b', 'c', 'd', 'e'];
    const weightArr = [1, 2, 3, 3, 6];
    const costArr = [6, 3, 5, 4, 6];
    const bagItems: BagItem[] = [];
    for ( let i = 0; i < nameArr.length; i ++) {
      const bagItem = new BagItem(nameArr[i], weightArr[i], costArr[i]);
      bagItems[i] = bagItem;
    }
    const getMaxCostInBag = new KnapSackWithGivenWeight();
    const result = getMaxCostInBag.findMaxCostSubsets(bagItems, 10);
    expect(result).toEqual(['a', 'd', 'e']);
  });

  test('test 5', () => {
    const nameArr = ['a', 'b', 'c', 'd', 'e', 'f'];
    const weightArr = [1, 2, 3, 6, 4, 8];
    const costArr = [1, 3, 5, 4, 4, 6];
    const bagItems: BagItem[] = [];
    for ( let i = 0; i < nameArr.length; i ++) {
      const bagItem = new BagItem(nameArr[i], weightArr[i], costArr[i]);
      bagItems[i] = bagItem;
    }
    const getMaxCostInBag = new KnapSackWithGivenWeight();
    const result = getMaxCostInBag.findMaxCostSubsets(bagItems, 11);
    expect(result).toEqual(['c', 'f']);
    // console.log(getMaxCostInBag.resultArr);
  });

});
