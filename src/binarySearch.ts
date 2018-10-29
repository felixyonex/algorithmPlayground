export class BinarySearch {

  public squareRoot(n: number, accuracy: number): string {
    if (n === 0) {
      return '0';
    } else {
      const inputOrigin = n;
      if ( n < 0 ) {
        n = -1 * n;
      }
      let l = 0;
      let h = n;
      const accuracyDigit = Math.pow(10, -1 * accuracy);
      while ( l < h ) {
        const m = (l + h) / 2;
        const s = m * m;
        if (Math.abs(s - n) <= accuracyDigit) {
        // if (Math.abs(s - n) === 0) {
          if ( inputOrigin < 0 ) {
            return m.toFixed(accuracy) + 'i';
          }
          return m.toFixed(accuracy);
        } else if (s < n) {
          l = m;
        } else if (s > n) {
          h = m;
        }
      }
      throw Error('unable to calculate the result');
    }
  }
}
