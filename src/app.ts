/* tslint:disable: no-require-imports no-var-requires */
require('source-map-support').install();
if (!(<any>global)._babelPolyfill) {
  require('babel-polyfill');
}
import 'reflect-metadata';
import { logger } from './logger';

(async () => {
  logger.info('Hello world');
})().catch(error =>
  logger.error('error during server start:' + JSON.stringify(error.stack))
);
