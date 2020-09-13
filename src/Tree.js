class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

export class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    let node = new Node(data);
    if (!this.root) {
      this.root = node;
    }

    let current = this.root;

    while (true) {
      if (current.data === data) {
        return;
      }

      if (current.data < node.data) {
        if (!current.right) {
          current.right = node;
        }
        current = current.right;
      }

      if (current.data > node.data) {
        if (!current.left) {
          current.left = node;
        }
        current = current.left;
      }
    }
  }

  BFS() {
    let visitedElements = [];
    let queue = [];

    let current = this.root;
    if (!current) return;

    queue.push(current);

    while (queue.length) {
      current = queue.shift();
      visitedElements.push(current.data);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    console.log(visitedElements);
  }

  preOrder() {
    console.log("akshay");
    let visited = [],
      current = this.root;

    let traverse = (node) => {
      visited.push(node.data);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(current);
    return visited;
  }
}
