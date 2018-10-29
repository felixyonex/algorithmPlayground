export class BinaryTree {

  public root: Node = null;

  public insert(data: any): void {
    const n = new Node (data, null, null);

    if (this.root === null) {
      this.root = n;
    } else {
      let current = this.root;
      let parent;

      // tslint:disable-next-line:no-constant-condition
      while (true) {
        parent = current;
        if (data < current.data) {
          current = current.left;
          if (current === null) {
            parent.left = n;
            break;
          }
        } else {
          current = current.right;
          if (current === null) {
            parent.right = n;
            break;
          }
        }
      }
    }
  }

  public resultArr: any[] = [];
  public clearResultArr(): void {
    this.resultArr = [];
  }

  public preOrder(node: Node) {
    if (node !== null) {
      // tslint:disable-next-line:no-console
      // console.log(node.data);
      this.resultArr.push(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
    return  this.resultArr;
  }

  public postOrder(node: Node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      this.resultArr.push(node.data);
    }
  }

  public inOrder(node: Node) {
    if (node !== null) {
      this.inOrder(node.left);
      this.resultArr.push(node.data);
      this.inOrder(node.right);
    }
  }

}

class Node {

  public data: any;
  public left: Node;
  public right: Node;

  constructor (data: any, left: Node, right: Node) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
