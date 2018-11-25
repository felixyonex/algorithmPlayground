export class DivideNIntoKParts {
  public count: number = 0;

  public getCount(): number {
    return this.count;
  }

  public solutionNum(n: number, k: number): number {
    if (k === 1 || n === k) {
      this.count++;
      return 1;
    } else if (n < k) {
      this.count++;
      return 0;
    } else {
      this.count++;
      return this.solutionNum(n - k, k) + this.solutionNum(n - 1, k - 1);
    }
  }

  public dp: any = {};

  public solutionNumImproved(n: number, k: number): number {
    if (k === 1 || n === k) {
      this.count++;
      this.dp[`${n} + ${k}`] = 1;
      return 1;
    } else if (n < k) {
      this.count++;
      this.dp[`${n} + ${k}`] = 0;
      return 0;
    } else {
      this.count++;
      this.dp[`${n} + ${k}`] = this.dp[`${n - k} + ${k}`]
        ? this.dp[`${n - k} + ${k}`]
        : this.solutionNumImproved(n - k, k);
      this.dp[`${n} + ${k}`] += this.dp[`${n - 1} + ${k - 1}`]
        ? this.dp[`${n - 1} + ${k - 1}`]
        : this.solutionNumImproved(n - 1, k - 1);
      return this.dp[`${n} + ${k}`];
    }
  }
}

export class GetMaxCostInBag {
  public bagMatrix: any;

  // public getMaxCostItems(bagItems: BagItem[], bagWeight: number): string[] {

  //   const bagMatrix: any[] = [];
  //   let i: number;
  //   let item: BagItem;

  //   for (i = 0; i < bagItems.length; i ++) {

  //     bagMatrix[i] = [0];

  //   }
  //   for (i = 1; i <= bagWeight; i ++) {

  //     for ( let j = 0; j < bagItems.length; j++) {

  //       item = bagItems[j];

  //       if (item.weight > i) {

  //         if (j === 0) {

  //           bagMatrix[j][i] = 0;

  //         } else {
  //           bagMatrix[j][i] = bagMatrix[j - 1][i];
  //         }

  //       } else {

  //         let itemsInBagCost: number;
  //         if (j === 0) {

  //           bagMatrix[j][i] = item.cost;
  //           continue;

  //         } else {

  //           itemsInBagCost = bagMatrix[j - 1][i - item.weight] + item.cost;

  //         }

  //         bagMatrix[j][i] = (bagMatrix[j - 1][i] > itemsInBagCost ? bagMatrix[j - 1][i] : itemsInBagCost);

  //       }
  //     }
  //   }

  //   this.bagMatrix = bagMatrix;

  //   const resultArr: string[] = [];
  //   let currentWeight = bagWeight;
  //   for ( i = bagItems.length - 1; i >= 0; i --) {
  //     item = bagItems[i];
  //     if (currentWeight === 0) {
  //       break;
  //     }
  //     if (i === 0 && currentWeight > 0) {
  //       resultArr.push(item.name);
  //       break;
  //     }
  //     if ( bagMatrix[i][currentWeight] - bagMatrix[i - 1][currentWeight - item.weight] === item.cost) {
  //       resultArr.push(item.name);
  //       currentWeight -= item.weight;
  //     }
  //   }

  //   return resultArr;

  // }

  public getMaxCostItems(bagItems: BagItem[], bagWeight: number): string[] {
    const bagMatrix: any[] = [];
    let i: number;
    let item: BagItem;

    for (i = 0; i < bagItems.length; i++) {
      bagMatrix[i] = [0];
    }
    for (i = 1; i <= bagWeight; i++) {
      for (let j = 0; j < bagItems.length; j++) {
        item = bagItems[j];

        if (item.weight > i) {
          if (j === 0) {
            bagMatrix[j][i] = 0;
          } else {
            bagMatrix[j][i] = bagMatrix[j - 1][i];
          }
        } else if (item.weight < i) {
          let itemsInBagCost: number;
          if (j === 0) {
            bagMatrix[j][i] = 0;
            // continue;
          } else {
            itemsInBagCost = bagMatrix[j - 1][i - item.weight] + item.cost;
            if (bagMatrix[j - 1][i - item.weight] > 0) {
              bagMatrix[j][i] =
                bagMatrix[j - 1][i] > itemsInBagCost
                  ? bagMatrix[j - 1][i]
                  : itemsInBagCost;
            } else if (bagMatrix[j - 1][i - item.weight] === 0) {
              bagMatrix[j][i] = 0;
            }
          }
        } else {
          if (j === 0) {
            bagMatrix[j][i] = item.cost;
          } else {
            bagMatrix[j][i] =
              bagMatrix[j - 1][i] > item.cost ? bagMatrix[j - 1][i] : item.cost;
          }
        }
      }
    }

    this.bagMatrix = bagMatrix;

    // console.log(this.bagMatrix);

    const resultArr: string[] = [];
    let currentWeight = bagWeight;
    if (this.bagMatrix[bagItems.length - 1][bagWeight] === 0) {
      throw new Error('cannot find items');
    }
    for (i = bagItems.length - 1; i >= 0; i--) {
      item = bagItems[i];
      if (currentWeight === 0) {
        break;
      }
      if (i === 0 && currentWeight > 0) {
        resultArr.push(item.name);
        break;
      }
      if (
        bagMatrix[i][currentWeight] -
          bagMatrix[i - 1][currentWeight - item.weight] ===
        item.cost
      ) {
        resultArr.push(item.name);
        currentWeight -= item.weight;
      }
    }

    return resultArr;
  }

  public getSumSolution(inputArr: number[], sum: number): number {
    const len = inputArr.length;
    inputArr.unshift(0);
    const dp: number[][] = [];

    for (let i = 0; i <= len; i++) {
      // tslint:disable-next-line:prefer-array-literal
      const temp = new Array(sum + 1).fill(0);
      dp.push(temp);
    }

    for (let i = 1; i <= len; i++) {
      for (let j = 1; j <= sum; j++) {
        if (j - inputArr[i] < 0) {
          dp[i][j] = dp[i - 1][j];
        } else if (j - inputArr[i] === 0) {
          dp[i][j] = dp[i - 1][j] + 1;
        } else {
          dp[i][j] = dp[i - 1][j - inputArr[i]] + dp[i - 1][j];
        }
      }
    }
    // console.log(dp);
    return dp[len][sum];
  }

  public getWeightItems(inputArr: BagItem[], sum: number): number {
    const len = inputArr.length;
    const emptyItem = new BagItem('a0', 0, 0);
    inputArr.unshift(emptyItem);
    const dp: number[][] = [];

    for (let i = 0; i <= len; i++) {
      // tslint:disable-next-line:prefer-array-literal
      const temp = new Array(sum + 1).fill(0);
      dp.push(temp);
    }

    for (let i = 1; i <= len; i++) {
      for (let j = 1; j <= sum; j++) {
        if (j - inputArr[i].weight < 0) {
          dp[i][j] = dp[i - 1][j];
        } else if (j - inputArr[i].weight === 0) {
          dp[i][j] = dp[i - 1][j] + inputArr[i].cost;
        } else {
          dp[i][j] = dp[i - 1][j - inputArr[i].weight] + dp[i - 1][j];
        }
      }
    }
    // console.log(dp);
    return dp[len][sum];
  }
}

export class KnapSackWithGivenWeight {
  public dp: boolean[][] = [];

  public resultArr: BagItem[][] = [];

  public count: number = 0;

  public getSubsetsRec(
    inputArr: BagItem[],
    i: number,
    sum: number,
    tempArr: BagItem[]
  ): any {
    if (i === 0 && sum !== 0 && this.dp[0][sum]) {
      this.count++;

      tempArr.push(inputArr[i]);
      const tempArr1: BagItem[] = tempArr.slice(0);

      this.resultArr.push(tempArr1);
      tempArr.length = 0;
      return;
    }

    if (i === 0 && sum === 0) {
      this.count++;

      const tempArr1: BagItem[] = tempArr.slice(0);
      this.resultArr.push(tempArr1);

      tempArr.length = 0;
      return;
    }

    if (this.dp[i - 1][sum]) {
      this.count++;

      const pArr: BagItem[] = tempArr.slice(0);
      this.getSubsetsRec(inputArr, i - 1, sum, pArr);
    }

    if (sum >= inputArr[i].weight && this.dp[i - 1][sum - inputArr[i].weight]) {
      this.count++;

      tempArr.push(inputArr[i]);
      this.getSubsetsRec(inputArr, i - 1, sum - inputArr[i].weight, tempArr);
    }

    return;
  }

  public getSubsets(inputArr: BagItem[], n: number, sum: number): any {
    if (n === 0 || sum < 0) {
      return;
    }

    for (let i = 0; i < n; ++i) {
      this.dp[i] = [];
      this.dp[i][0] = true;
    }

    if (inputArr[0].weight < sum) {
      this.dp[0][inputArr[0].weight] = true;
    }

    for (let i = 1; i < n; ++i) {
      for (let j = 0; j < sum + 1; ++j) {
        this.dp[i][j] =
          inputArr[i].weight <= j
            ? this.dp[i - 1][j] || this.dp[i - 1][j - inputArr[i].weight]
            : this.dp[i - 1][j];
      }
    }

    if (this.dp[n - 1][sum] === undefined) {
      // throw new Error ('Cannot find a Subset');
      return;
    }

    // console.log(this.dp);

    const tempArr: BagItem[] = [];
    this.getSubsetsRec(inputArr, n - 1, sum, tempArr);

    return this.resultArr;
  }

  public findMaxCostSubsets(inputArr: BagItem[], sum: number): string[] {
    this.getSubsets(inputArr, inputArr.length, sum);

    let currentCost: number = 0;
    let maxCost: number = 0;
    let maxIdx: number = 0;

    for (let i = 0; i < this.resultArr.length; i++) {
      for (let j = 0; j < this.resultArr[i].length; j++) {
        currentCost += this.resultArr[i][j].cost;
      }

      if (currentCost > maxCost) {
        maxCost = currentCost;
        maxIdx = i;
      }
    }

    if (this.resultArr[maxIdx]) {
      return this.resultArr[maxIdx].map(ele => ele.name).reverse();
    }

    return ['Cannot find the subset'];
  }
}

// export class KnapSackWithGivenWeight {

//   public dp: boolean[][] = [];

//   public resultArr: number[][] = [];

//   public getSubsetsRec(inputArr: number[], i: number, sum: number, tempArr: number[]): any {

//     if (i === 0 && sum !== 0 && this.dp[0][sum]) {

//         tempArr.push(inputArr[i]);
//         const tempArr1: number[] = [];
//         tempArr.forEach((ele) => tempArr1.push(ele));

//         this.resultArr.push(tempArr1);
//         tempArr.length = 0;
//         return;
//    }

//     if (i === 0 && sum === 0) {
//       const tempArr1: number[] = [];
//       tempArr.forEach((ele, idx) => tempArr1[idx] = ele);
//       this.resultArr.push(tempArr1);

//       tempArr.length = 0;
//       return;
//    }

//     if (this.dp[i - 1][sum]) {

//       const pArr: number[] = [];
//       tempArr.forEach((ele, idx) => pArr[idx] = ele);
//       this.getSubsetsRec(inputArr, i - 1, sum, pArr);
//    }

//     if (sum >= inputArr[i] && this.dp[i - 1][sum - inputArr[i]]) {

//       tempArr.push(inputArr[i]);
//       this.getSubsetsRec(inputArr, i - 1, sum - inputArr[i], tempArr);

//    }

//     return;

//   }

//   public getSubsets (inputArr: number[], n: number, sum: number): any {

//     if (n === 0 || sum < 0) {
//       return;
//     }

//     for (let i = 0; i < n; ++i) {
//       this.dp[i] = [];
//       this.dp[i][0] = true;
//     }

//     if (inputArr[0] < sum) {
//       this.dp[0][inputArr[0]] = true;
//     }

//     for (let i = 1; i < n; ++i) {

//       for (let j = 0; j < sum + 1; ++j) {

//         this.dp[i][j] = (inputArr[i] <= j) ? (this.dp[i - 1][j] || this.dp[i - 1][j - inputArr[i]]) : this.dp[i - 1][j];
//       }
//     }

//     if (this.dp[n - 1][sum] === undefined) {
//       throw new Error ('Cannot find a Subset');
//     }

//     console.log(this.dp);

//     const tempArr: number[] = [];
//     this.getSubsetsRec(inputArr, n - 1, sum, tempArr);

//     return this.resultArr;
//   }
// }

export class BagItem {
  public name: string;
  public weight: number;
  public cost: number;
  constructor(name: string, weight: number, cost: number) {
    this.name = name;
    this.weight = weight;
    this.cost = cost;
  }
}
