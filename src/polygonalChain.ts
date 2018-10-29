export class PolygonalChain {

  public verticesInChain(inputVertices: number[][]): number[][] {
    return inputVertices.sort((a, b) => a[0] - b[0]);
  }

  public verticesInCloseShape(inputVertices: number[][]): number[][] {

    const sortedInputVertices = inputVertices.sort((a, b) => a[0] - b[0]);

    const startVertice = sortedInputVertices[0];
    const startX = startVertice[0];
    const startY = startVertice[1];

    const endVertice = sortedInputVertices[sortedInputVertices.length - 1];

    const slope = (endVertice[1] - startVertice[1]) / (endVertice[0] - startVertice[0]);

    const upperVertices = [];
    const lowerVertices = [];
    const resultVertices: number[][] = [];

    for (let i = 1; i < sortedInputVertices.length - 1; i ++) {
      const currentVertice = sortedInputVertices[i];
      const currentX = currentVertice[0];
      const currentY = currentVertice[1];
      const comparePointY = startY + slope * (currentX - startX);
      if (currentY > comparePointY) {
        upperVertices.push(currentVertice);
      } else {
        lowerVertices.unshift(currentVertice);
      }
    }
    return [startVertice,  ...upperVertices, endVertice, ...lowerVertices, startVertice];
    // return resultVertices.concat(startVertice, upperVertices, endVertice, lowerVertices, startVertice);

  }

  public polygonalChainAngle(inputVertices: number[][]): number[][] {
    // const sortedInputVertices = inputVertices.sort((a, b) => a[0] - b[0]);
    let startVertice = inputVertices[0];
    let startIdx = 0;
    const resultVertices: number[][] = [];

    inputVertices.forEach((ele, idx) => {
      if (ele[0] < startVertice[0]) {
        startVertice = ele;
        startIdx = idx;
      }
    });

    inputVertices.splice(startIdx, 1);

    inputVertices.sort(
    (a, b) => (a[1] - startVertice[1]) / (a[0] - startVertice[0]) - (b[1] - startVertice[1]) / (b[0] - startVertice[0]));

    const startVerticeForConcat: number[][] = [];
    startVerticeForConcat[0] = startVertice;

    return resultVertices.concat(startVerticeForConcat, inputVertices, startVerticeForConcat);
    }
}
