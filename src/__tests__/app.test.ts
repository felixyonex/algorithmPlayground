import { logger } from '../logger';

describe('Dummy test suite', () => {
  describe('Dummy test sub suite A', () => {
    beforeAll(() => {
      logger.info('beforeAll in suite A');
    });
    afterAll(() => {
      logger.info('afterAll in suite A');
    });
    beforeEach(() => {
      logger.info('beforeEach in suite A');
    });
    it('should do something useful', () => {
      expect(true).toEqual(true);
    });
  });
});
