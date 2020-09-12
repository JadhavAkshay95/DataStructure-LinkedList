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

/**
 * Output
 * 50 -> 10 -> 100 -> 20 -> 30 -> 40 => null
 */
