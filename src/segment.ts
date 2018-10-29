export class Segment {
  public maxJointLength (segmentSet: number[][]): number {
    const sortedSegmentSet = segmentSet.sort((a, b) => a[0] - b[0]);
    let left = sortedSegmentSet[0][0];
    let right = sortedSegmentSet[0][1];
    let maxLength = right - left;
    let currentLength = right - left;

    for ( let i = 1; i < sortedSegmentSet.length; i ++) {
        if (sortedSegmentSet[i][0] > right) {
          left = sortedSegmentSet[i][0];
        }

        if ( right < sortedSegmentSet[i][1]) {
          right = sortedSegmentSet[i][1];
        }
        currentLength = right - left;
        if (maxLength < currentLength) {
          maxLength = currentLength;
        }
    }
    return maxLength;
  }

  public findX (segmentSet: number[][]): number[][] {
    const sortedSegmentSet = segmentSet.sort((a, b) => a[0] - b[0]);
    const nodeArr: Node[] = [];
    sortedSegmentSet.forEach(( val, idx) => {
      nodeArr.push(new Node(val[0], idx, 'start'));
      nodeArr.push(new Node(val[1], idx, 'end'));
    });
    const sortedNodeArr = nodeArr.sort((a, b) => a.value - b.value);
    const hash: any = {};
    let maxRepetition = 0;
    let x: number[][] = [];

    for ( let i = 0; i < sortedNodeArr.length; i++) {
      const ele = sortedNodeArr[i];

      if (ele.position === 'start') {
        hash[ele.index] = ele.value;
      }

      if (ele.position === 'end') {
        const maxStartValue = Math.max.apply(this, Object.values(hash));
        delete hash[ele.index];

        if (Object.keys(hash).length > maxRepetition) {
          x = [[maxStartValue, ele.value]];
          maxRepetition = Object.keys(hash).length;

        } else if (Object.keys(hash).length === maxRepetition) {
          x.push([maxStartValue, ele.value]);
        }
      }
    }
    return x;
  }
}

class Node {
  public value: number;
  public index: number;
  public position: string;
  constructor ( value: number, index: number, position: string) {
    this.value = value;
    this.index = index;
    this.position = position;
  }
}
