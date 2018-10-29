export class Sequence {

  public findSumS(sequence: number[], sum: number): number[][] {
    let i: number = 0;
    let j: number = 0;
    let tempSum: number = sequence[0];
    const resultArr = [];

    while (i <= j && j < sequence.length) {
      if (tempSum >= sum) {
        if (tempSum === sum) {
          resultArr.push([i + 1, j + 1]);
        }
        tempSum -= sequence[i];
        i++;
      } else {
          j++;
          tempSum += sequence[j];
      }
    }
    return resultArr;
  }

  public getMaxSubSum(sequence: number[]): number {
    let sumMax = 0; //record the max sum of sub sequence
    let flag = 0; //record the number of negative integers
    let maxNum = sequence[0];
    let currentSum = 0;

    for ( let i = 0 ; i < sequence.length; i++) {

      if (sequence[i] < 0 ) {
        flag ++;
      }

      if ( maxNum < sequence[i]) {
        maxNum = sequence[i];
      }

      currentSum += sequence[i];

      if ( currentSum > sumMax) {
        sumMax = currentSum;
      }

      // if currentSum <0, start to sum from the next element
      if ( currentSum < 0) {
        currentSum = 0;
      }
    }

      //if all the elements are negative, the max number is the max sum;
    if (flag === sequence.length) {
      sumMax = maxNum;
    }

    return sumMax;
  }

    //Find max and delete the prior one;
    //works
/*   public deleteK(inputNum: string, k: number): string {
      // const inputArr: number[] = JSON.parse('[' + inputNum.split('') + ']');
      let len = inputNum.length - k;
      // const resultArr = [];
      let resultStr = '';

      while (len !== 0) {
        let maxDigit = inputNum[0];
        let maxIndex;

        //find the largest digit in the first k digits

        for ( let i = 0; i <= k; i++) {
          if ( parseInt(maxDigit, 10) < parseInt(inputNum[i], 10)) {
            maxDigit = inputNum[i];
            maxIndex = i;
          }
        }

        k = k - maxIndex;
        // resultArr.push(maxDigit);
        resultStr += maxDigit;
        len --;
        // inputArr.splice(0, index + 1);
        inputNum = inputNum.substr(maxIndex + 1);

        if ( k === 0) {
          // resultArr.concat(inputArr);
          resultStr = resultStr + inputNum;
          break;
        }
      }
      // return resultArr.join('');
      return resultStr;
  } */

  // public deleteK(inputNum: string, k: number): string {
  //     let inputArr: number[] = JSON.parse('[' + inputNum.split('') + ']');
  //     let len = inputArr.length - k;
  //     const resultArr = [];

  //     while (len !== 0) {
  //       let maxDigit = 0;

  //       //find the largest digit in the first k digits

  //       for ( let i = 0; i <= k; i++) {
  //         if ( maxDigit < inputArr[i] ) {
  //           maxDigit = inputArr[i];
  //         }
  //       }
  //       const index = inputArr.indexOf(maxDigit);

  //       k = k - index;
  //       resultArr.push(maxDigit);
  //       // resultStr += maxDigit;
  //       len --;
  //       inputArr = inputArr.slice(index + 1);
  //       // inputArr.splice(0, index + 1);
  //       // inputNum = inputNum.substr(index + 1);

  //       if ( k === 0) {
  //         resultArr.concat(inputArr);
  //         // resultStr = resultStr + inputNum;
  //         break;
  //       }
  //     }
  //     return resultArr.join('');
  // }

  // public deleteK(inputNum: string, k: number): string {

  //     if ( k > inputNum.length || k < 0 ) {
  //       throw new Error ('invalid K');
  //     }

  //     const inputArr: number[] = JSON.parse('[' + inputNum.split('') + ']');
  //     let i = 0;

  //     while (k--) {

  //       while (i < inputArr.length - 1 && inputArr[i] >= inputArr[i + 1]) {
  //         i ++;
  //       }

  //       if ( i === inputArr.length - 1) {
  //         inputArr.length --;
  //         while ( k-- ) {
  //           inputArr.length --;
  //         }
  //         break;
  //       } else {
  //         inputArr.splice(i, 1);
  //         if (i > 0) {
  //           i --;
  //         }
  //       }
  //     }
  //     return inputArr.join('');
  // }

  // with K increases, it becomes quadratic
  // public deleteK(inputNum: string, k: number): string {
  //     const inputArr: number[] = JSON.parse('[' + inputNum.split('') + ']');
  //     // const resultArr = [];

  //     for ( let i = 0; i < k; i++) {
  //       let j = 0;

  //       while ( j < inputArr.length - 1 && inputArr[j] >= inputArr[j + 1]) {
  //         j ++;
  //       }

  //       inputArr.splice(j, 1);
  //     }

  //     return inputArr.join('');
  // }

  // using a stack
  public deleteK(inputNum: string, k: number): string {
    const inputArr: number[] = JSON.parse('[' + inputNum.split('') + ']');
    let i = 0;
    const resultArr: number[] = [];

    while (i < inputArr.length) {

      while ( k > 0 && resultArr.length !== 0 && resultArr[resultArr.length - 1] < inputArr[i]) {
        resultArr.pop();
        k --;
      }

      resultArr.push(inputArr[i]);

      i ++;

    }

    while ( k > 0) {
      resultArr.pop();
      k --;
    }
    return resultArr.join('');
  }
}
