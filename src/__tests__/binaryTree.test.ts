import { BinaryTree } from '../binaryTree';

describe('Binary Tree Test', () => {
  test('test 1', () => {
    const binaryTree = new BinaryTree();
    const inputArr = [10, 6, 12, 13, 4, 11, 8];
    inputArr.forEach((val) => {
      binaryTree.insert(val);
    });
    binaryTree.preOrder(binaryTree.root);
    expect(binaryTree.resultArr).toEqual([10, 6, 4, 8, 12, 11, 13]);
  });

  test('test 2', () => {
    const binaryTree = new BinaryTree();
    const inputArr = [10, 6, 12, 13, 4, 11, 8];
    inputArr.forEach((val) => {
      binaryTree.insert(val);
    });
    binaryTree.postOrder(binaryTree.root);
    expect(binaryTree.resultArr).toEqual([4, 8, 6, 11, 13, 12, 10]);
  });

  test('test 3', () => {
    const binaryTree = new BinaryTree();
    const inputArr = [10, 6, 12, 13, 4, 11, 8];
    inputArr.forEach((val) => {
      binaryTree.insert(val);
    });
    binaryTree.inOrder(binaryTree.root);
    expect(binaryTree.resultArr).toEqual([4, 6, 8, 10, 11, 12, 13]);
  });

});
