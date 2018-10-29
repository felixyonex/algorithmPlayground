export class MinAndMax {

  public count: number = 0;

  public findMinAndMax(inputArr: number[]): number[] {
    let min: number = inputArr[0];
    let max: number = inputArr[0];
    for (let i = 0; i < inputArr.length - 1; i += 2) {

      if (inputArr[i] < inputArr[i + 1]) {
        this.count ++;
        if (inputArr[i + 1] > max) {
          max = inputArr[i + 1];
          this.count ++;
        }

        if (inputArr[i] < min) {
          min = inputArr[i];
          this.count ++;
        }

      } else {
        if (inputArr[i] > max) {
          max = inputArr[i];
          this.count ++;
        }

        if (inputArr[i + 1] < min) {
          min = inputArr[i + 1];
          this.count ++;
        }
      }
    }
    return [min, max];
  }
}
