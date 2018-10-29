import {ExeExpression} from '../formalGrammar';

describe('Divide N Test', () => {
  // test('test 1', () => {
  //   const result = new ExeExpression().execute('1+2+6-4+55');
  //   expect(result).toBe(60);
  // });
  // test('test 2', () => {
  //   const result = new ExeExpression().execute('1+2+3*4-5');
  //   expect(result).toBe(10);
  // });
  test('test 3', () => {
    const result = new ExeExpression().execute('1+2+3*(4-5)');
    expect(result).toBe(0);
  });
});
