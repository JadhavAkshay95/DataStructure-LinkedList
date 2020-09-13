/**
 * Node class
 */
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
/**
 * Linked List class
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  /**
   * Add elements at the end of linked list
   * @param {*} value element to add
   */
  add(value) {
    this.length++;
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = node;
    }
  }
  /**
   * Add elements at the begining of linked list
   * @param {*} value element to add
   */
  addAtBegining(value) {
    this.length++;
    let node = new Node(value);
    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
    }
  }
  /**
   * Insert element at given position in linked list
   * @param {*} data element to add
   * @param {*} index position
   */
  insertAtGivenPosition(data, index) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    }
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let prevNode = this.findPrevNode(index - 1);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
    }
  }

  /**
   * Helper function to find node at given index
   * @param {*} index
   */
  findPrevNode(index) {
    let counter = 0;
    let tail = this.head;
    while (tail) {
      if (counter === index) {
        return tail;
      }
      counter++;
      tail = tail.next;
    }
    return null;
  }
  /**
   * Delete element from begining
   */
  deleteFirstNode() {
    if (!this.head) {
      return null;
    }

    if (!this.head.next) {
      this.head = null;
    }

    this.head = this.head.next;
  }
  /**
   * Delete element from last
   */
  deleteLastNode() {
    let tail = this.head;
    let prevNode;

    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
    }

    while (tail.next) {
      prevNode = tail;
      tail = tail.next;
    }
    prevNode.next = null;
  }
  /**
   * Delete element from Specified Index
   * @param {*} index index
   */
  deleteElementFromParticularPoition(index) {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
    }

    const prevNode = this.findPrevNode(index - 1);
    let nodeToDelete = prevNode.next;
    prevNode.next = nodeToDelete.next;
  }

  /**
   * Print linked list
   */
  print() {
    let tail = this.head;
    let arr = [];
    while (tail) {
      arr.push(tail.data);
      tail = tail.next;
    }
    console.log(`${arr.join(" -> ")} => null  `);
  }
}

let LinkedListObject = new LinkedList();
LinkedListObject.add("10");
LinkedListObject.add("20");
LinkedListObject.add("30");
LinkedListObject.add("40");
LinkedListObject.addAtBegining("50");
LinkedListObject.insertAtGivenPosition("100", 2);
LinkedListObject.print();
LinkedListObject.deleteElementFromParticularPoition(2);
LinkedListObject.print();
let LinkedListObject1 = new LinkedList();
LinkedListObject1.print();
LinkedListObject1.deleteElementFromParticularPoition(2);
LinkedListObject1.print();
LinkedListObject.print();

/**
 * Output
 * 50 -> 10 -> 100 -> 20 -> 30 -> 40 => null
 */
