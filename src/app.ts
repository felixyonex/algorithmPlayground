/* tslint:disable: no-require-imports no-var-requires */
require('source-map-support').install();
if (!(<any>global)._babelPolyfill) {
  require('babel-polyfill');
}
import 'reflect-metadata';
import { logger } from './logger';
import { deleteKRuntime, divideNCount, divideNRuntime, divideNWithDiffKCount, divideNWithDiffKOutput,
  findMinAndMaxRuntime, findXRuntime, fomalGrammarTest, getMaxJointLengthRuntime, getMaxSubSumRuntime,
  getSumSRuntime, insertBinaryTreeRuntime, putItemInBagRuntime, squareRootRuntime, verticesInChainRuntime, verticesRuntime } from './main';
(async () => {
  // await getSumSRuntime();
  // await getMaxSubSumRuntime();
  // await deleteKRuntime();
  // await squareRootRuntime();
  // await findXRuntime();
  // await getMaxJointLengthRuntime();
  // await insertBinaryTreeRuntime();
  // await findMinAndMaxRuntime();
  // await verticesRuntime();
  // await verticesInChainRuntime();
  // await divideNRuntime();
  // await divideNCount();
  // await divideNWithDiffKCount();
  // await divideNWithDiffKOutput();
  // await knapSackRuntime();
  //await putItemInBagRuntime();
})().catch(error =>
  logger.error('error during server start:' + JSON.stringify(error.stack))
);

fomalGrammarTest();
