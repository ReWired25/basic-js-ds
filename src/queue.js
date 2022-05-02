const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }

  createNode(value) {
    return {
        value: value,
        next: null
    }
  }

  checkNode(node, value) {
    if (!node) {
        return this.createNode(value);
    } else {
        node.next = this.checkNode(node.next, value);
    }

    return node;
  }

  enqueue(value) {
    if (!this.value) {
        this.value = value;
        return;
    }

    this.next = this.checkNode(this.next, value);
  }

  dequeue() {
    let currValue = this.value;

    if (this.next) {
        this.value = this.next.value;
        this.next = this.next.next;
      } else {
        this.value = null;
        this.next = null;
      }
        
    return currValue
  }

  getUnderlyingList() {
    return {
        value: this.value,
        next: this.next
    }
  }
}

module.exports = {
  Queue
};
