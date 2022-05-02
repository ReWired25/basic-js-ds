const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  if (!l) return;

  if (l.value === k) {
      l = l.next;
  }

  let prev = l;

  return searchNode(prev, k, prev.next);

  function searchNode(prev, k, currNode) {
      if (currNode.value === k) {
          prev.next = currNode.next;
          if (currNode.next) {
              searchNode(prev, k, currNode.next);
          }
      }

      if (currNode.next) {
          let prev = currNode;
          searchNode(prev, k, currNode.next);
      }

      return l;
  }
}

module.exports = {
  removeKFromList
};
