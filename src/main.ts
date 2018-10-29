import * as fs from 'fs';
import { now } from 'microtime';

import * as ProgressBar from 'progress';
import { BinarySearch } from './binarySearch';
import { BinaryTree } from './binaryTree';
import { BagItem, DivideNIntoKParts, GetMaxCostInBag, KnapSackWithGivenWeight } from './dynamicProgramming';
import { MinAndMax } from './minAndMax';
import { PolygonalChain } from './polygonalChain';
import { Segment } from './segment';
import { Sequence } from './sequence';

const label: string[] = [];
const data: number[] = [];
let resultJson = {
  label: label,
  data: data
};

export async function getSumSRuntime() {
  const rangeFinder = new Sequence();
  const sequence = [];

  for (let i = 100000; i > 0; i -= 1) {
    sequence.push(i);
    label.push(`N:${i}`);
    const start = now();
    rangeFinder.findSumS(sequence, i);
    const end = now();
    data.push(end - start);
  }

  resultJson = {
    label: label,
    data: data
  };
  await new Promise<void>((resolve, reject) => {
    fs.writeFile('./getSumS.json', JSON.stringify(resultJson), err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

export async function getMaxSubSumRuntime() {
  const rangeFinder = new Sequence();
  const sequence = [];

  for (let i = 0; i < 100000; i += 1) {
    // tslint:disable-next-line:insecure-random
    sequence.push(Math.floor(10000 * Math.random()) * (i % 2 === 0 ? -1 : 1));
    label.push(`N:${i}`);
    const start = now();
    rangeFinder.getMaxSubSum(sequence);
    const end = now();
    data.push(end - start);
  }

  resultJson = {
    label: label,
    data: data
  };
  await new Promise<void>((resolve, reject) => {
    fs.writeFile('./getMaxSubSum.json', JSON.stringify(resultJson), err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

export async function deleteKRuntime() {
  const sequence = new Sequence();
  let inputNum = '5';

  for (let i = 1; i < 10000; i += 1) {
    // tslint:disable-next-line:insecure-random
    inputNum += Math.floor(10 * Math.random());
    label.push(`N:${i}`);
    const start = now();
    sequence.deleteK(inputNum, i);
    const end = now();
    data.push(end - start);
  }

  resultJson = {
    label: label,
    data: data
  };
  await new Promise<void>((resolve, reject) => {
    fs.writeFile('./deleteK.json', JSON.stringify(resultJson), err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

export async function squareRootRuntime() {
  const binarySearch = new BinarySearch();
  const bar = new ProgressBar('  Processing [:bar] [:current] [:eta]', {
    complete: '=',
    incomplete: ' ',
    width: 20,
    total: 1000000
  });

  let i = 1;
  async function test() {
    bar.tick(100);
    label.push(`N:${i}`);
    const n = i * i + 1;
    const start = now();
    binarySearch.squareRoot(n, 5);
    const end = now();
    data.push(end - start);
    i += 100;

    if ( i < 1000000 ) {
      setTimeout(test, 0.0);
      // test();
    } else {
      // tslint:disable-next-line:no-console
      console.log('\ncomplete\n');
      resultJson = {
        label: label,
        data: data
      };
      await new Promise<void>((resolve, reject) => {
        fs.writeFile('./squareRoot.json', JSON.stringify(resultJson), err => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    }
  }
  test();
}

export async function findXRuntime() {
  const segment = new Segment();
  const inputArr: number[][] = [];

  for (let i = 0; i < 1000; i += 1) {
    // tslint:disable-next-line:insecure-random
    inputArr.push([100 * Math.random(), 100 * Math.random()]);
    label.push(`N:${i}`);
    const start = now();
    segment.findX(inputArr);
    const end = now();
    data.push(end - start);
  }

  resultJson = {
    label: label,
    data: data
  };
  await new Promise<void>((resolve, reject) => {
    fs.writeFile('./findX.json', JSON.stringify(resultJson), err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

export async function getMaxJointLengthRuntime() {
  const segment = new Segment();
  const inputArr: number[][] = [];

  for (let i = 0; i < 10000; i += 1) {
    // tslint:disable-next-line:insecure-random
    inputArr.push([100 * Math.random(), 100 * Math.random()]);
    label.push(`N:${i}`);
    const start = now();
    segment.maxJointLength(inputArr);
    const end = now();
    data.push(end - start);
  }

  resultJson = {
    label: label,
    data: data
  };
  await new Promise<void>((resolve, reject) => {
    fs.writeFile('./maxJointLength.json', JSON.stringify(resultJson), err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

export async function insertBinaryTreeRuntime() {
  const binaryTree = new BinaryTree();
  const bar = new ProgressBar('  Processing [:bar]', {
    complete: '=',
    incomplete: ' ',
    width: 20,
    total: 100000
  });

  let i = 1;
  async function test() {
    bar.tick(1);
    label.push(`N:${i}`);
    // tslint:disable-next-line:insecure-random
    const inputRandomNum = Math.random() * 1000;
    const start = now();
    binaryTree.insert(inputRandomNum);
    const end = now();
    data.push(end - start);
    i += 1;

    if ( i < 100000 ) {
      setTimeout(test, 0.0);
      // test();
    } else {
      // tslint:disable-next-line:no-console
      console.log('\ncomplete\n');
      resultJson = {
        label: label,
        data: data
      };
      await new Promise<void>((resolve, reject) => {
        fs.writeFile('./insertBinaryTree.json', JSON.stringify(resultJson), err => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    }
  }
  test();
}

export async function findMinAndMaxRuntime() {
  const minAndMax = new MinAndMax();
  const bar = new ProgressBar('  Processing [:bar] [:current] [:eta]', {
    complete: '=',
    incomplete: ' ',
    width: 20,
    total: 1000000
  });

  let i = 0;
  async function test() {
    const inputArr: number[] = [];
    for ( let j = 0; j <= i; j ++) {
      inputArr.push(j);
      inputArr.push(-j);
    }
    bar.tick(1000);
    label.push(`N:${i}`);
    const start = now();
    minAndMax.findMinAndMax(inputArr);
    const end = now();
    data.push(end - start);
    i += 1000;

    if ( i < 1000000 ) {
      setTimeout(test, 0.0);
      // test();
    } else {
      // tslint:disable-next-line:no-console
      console.log('\ncomplete\n');
      resultJson = {
        label: label,
        data: data
      };
      await new Promise<void>((resolve, reject) => {
        fs.writeFile('./findMinAndMax.json', JSON.stringify(resultJson), err => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    }
  }
  test();
}

export async function verticesRuntime() {
  const polygonalChain = new PolygonalChain();
  const bar = new ProgressBar('  Processing [:bar] [:current] [:eta]', {
    complete: '=',
    incomplete: ' ',
    width: 20,
    total: 100000
  });

  let i = 0;
  const inputArr: number[][] = [];
  async function test() {
    for ( let j = 0; j <= 100; j ++) {
      // tslint:disable-next-line:insecure-random
      inputArr.push([Math.random() * 100, Math.random() * 100]);
    }
    bar.tick(100);
    label.push(`N:${i}`);
    const start = now();
    polygonalChain.verticesInCloseShape(inputArr);
    const end = now();
    data.push(end - start);
    i += 100;

    if ( i < 100000 ) {
      setTimeout(test, 0.0);
      // test();
    } else {
      // tslint:disable-next-line:no-console
      console.log('\ncomplete\n');
      resultJson = {
        label: label,
        data: data
      };
      await new Promise<void>((resolve, reject) => {
        fs.writeFile('./verticesInClosedShape.json', JSON.stringify(resultJson), err => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    }
  }
  test();
}

export async function verticesInChainRuntime() {
  const polygonalChain = new PolygonalChain();
  const bar = new ProgressBar('  Processing [:bar] [:current] [:eta]', {
    complete: '=',
    incomplete: ' ',
    width: 20,
    total: 100000
  });

  let i = 0;
  const inputArr: number[][] = [];
  async function test() {
    for ( let j = 0; j <= 100; j ++) {
      // tslint:disable-next-line:insecure-random
      inputArr.push([Math.random() * 100, Math.random() * 100]);
    }
    bar.tick(100);
    label.push(`N:${i}`);
    const start = now();
    polygonalChain.verticesInChain(inputArr);
    const end = now();
    data.push(end - start);
    i += 100;

    if ( i < 100000 ) {
      setTimeout(test, 0.0);
      // test();
    } else {
      // tslint:disable-next-line:no-console
      console.log('\ncomplete\n');
      resultJson = {
        label: label,
        data: data
      };
      await new Promise<void>((resolve, reject) => {
        fs.writeFile('./verticesInChain.json', JSON.stringify(resultJson), err => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    }
  }
  test();
}

export async function divideNRuntime() {
  const divideN = new DivideNIntoKParts();
  const bar = new ProgressBar('  Processing [:bar] [:current] [:eta]', {
    complete: '=',
    incomplete: ' ',
    width: 20,
    total: 5000
  });

  let i = 2;
  async function test() {
    bar.tick(10);
    label.push(`N:${i}`);
    const k = Math.floor(i / 2);
    const start = now();
    divideN.solutionNumImproved(i, k);
    const end = now();
    data.push(end - start);
    i += 10;

    if ( i < 5000 ) {
      setTimeout(test, 0.0);
      // test();
    } else {
      // tslint:disable-next-line:no-console
      console.log('\ncomplete\n');
      resultJson = {
        label: label,
        data: data
      };
      await new Promise<void>((resolve, reject) => {
        fs.writeFile('./divideN.json', JSON.stringify(resultJson), err => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    }
  }
  test();
}

export async function divideNCount() {
  const divideN = new DivideNIntoKParts();
  const bar = new ProgressBar('  Processing [:bar] [:current] [:eta]', {
    complete: '=',
    incomplete: ' ',
    width: 20,
    total: 5000
  });

  let i = 2;
  async function test() {
    bar.tick(10);
    label.push(`N:${i}`);
    const k = Math.floor(i / 2);
    // const start = now();
    divideN.solutionNumImproved(i, k);
    // const end = now();
    const count = divideN.getCount();
    data.push(count);
    i += 10;

    if ( i < 5000 ) {
      setTimeout(test, 0.0);
      // test();
    } else {
      // tslint:disable-next-line:no-console
      console.log('\ncomplete\n');
      resultJson = {
        label: label,
        data: data
      };
      await new Promise<void>((resolve, reject) => {
        fs.writeFile('./divideNCount.json', JSON.stringify(resultJson), err => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    }
  }
  test();
}
export async function divideNWithDiffKCount() {
  const divideN = new DivideNIntoKParts();
  const bar = new ProgressBar('  Processing [:bar] [:current] [:eta]', {
    complete: '=',
    incomplete: ' ',
    width: 20,
    total: 5000
  });

  let i = 1;
  async function test() {
    bar.tick(1);
    label.push(`N:${i}`);
    // const k = Math.floor(i / 2);
    // const start = now();
    divideN.solutionNumImproved(1000, i);
    // const end = now();
    const count = divideN.getCount();
    data.push(count);
    i += 1;

    if ( i < 1000 ) {
      setTimeout(test, 0.0);
      // test();
    } else {
      // tslint:disable-next-line:no-console
      console.log('\ncomplete\n');
      resultJson = {
        label: label,
        data: data
      };
      await new Promise<void>((resolve, reject) => {
        fs.writeFile('./divideNWithDiffKCount.json', JSON.stringify(resultJson), err => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    }
  }
  test();
}

export async function divideNWithDiffKOutput() {
  const divideN = new DivideNIntoKParts();
  const bar = new ProgressBar('  Processing [:bar] [:current] [:eta]', {
    complete: '=',
    incomplete: ' ',
    width: 20,
    total: 30
  });

  let i = 1;
  async function test() {
    bar.tick(1);
    label.push(`N:${i}`);
    data.push(divideN.solutionNumImproved(30, i));
    i += 1;

    if ( i <= 30 ) {
      setTimeout(test, 0.0);
      // test();
    } else {
      // tslint:disable-next-line:no-console
      console.log('\ncomplete\n');
      resultJson = {
        label: label,
        data: data
      };
      await new Promise<void>((resolve, reject) => {
        fs.writeFile('./divideNWithDiffKOutput.json', JSON.stringify(resultJson), err => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    }
  }
  test();
}

export async function putItemInBagRuntime() {
  const putItemInBag = new GetMaxCostInBag();
  const bar = new ProgressBar('  Processing [:bar] [:current] [:eta]', {
    complete: '=',
    incomplete: ' ',
    width: 20,
    total: 200
  });

  let i = 1;
  const itemArr: BagItem[] = [];
  async function test() {
    for ( let j = 0; j <= i; j ++) {
      // tslint:disable-next-line:insecure-random
      const weight = i;
      // tslint:disable-next-line:insecure-random
      const cost = Math.floor(Math.random() * 100);
      const bagItem = new BagItem('a' + i, weight, cost);
      itemArr.push(bagItem);
    }
    bar.tick(1);
    label.push(`N:${i}`);
    const start = now();
    putItemInBag.getMaxCostItems(itemArr, i);
    const end = now();
    data.push(end - start);
    i += 1;

    if ( i < 200 ) {
      setTimeout(test, 0.0);
      // test();
    } else {
      // tslint:disable-next-line:no-console
      console.log('\ncomplete\n');
      resultJson = {
        label: label,
        data: data
      };
      await new Promise<void>((resolve, reject) => {
        fs.writeFile('./putItemInBag.json', JSON.stringify(resultJson), err => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    }
  }
  test();
}