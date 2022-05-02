const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(data = null) {
      this.currRoot = data;
      this.values = [];
  }

  root() {
      return this.currRoot ? this.currRoot : null;
  }

  createNode(data) {
      return {
          data: data,
          right: null,
          left: null
      }
  }

  nextLevelNode(node, data) {
      if (!node) {
          return this.createNode(data);
      }

      if (data === node.data) {
          return node;
      }

      if (data > node.data) {
          node.right = this.nextLevelNode(node.right, data);
      } else {
          node.left = this.nextLevelNode(node.left, data);
      }

      return node;
  }

  hasValueNode(node, data) {
      if (!node) return null;

      if (node.data === data) {
          return node;
      }

      if (data > node.data) {
          return this.hasValueNode(node.right, data);
      } else {
          return this.hasValueNode(node.left, data);
      }
  }

  leftTraversal(node = this.currRoot) {
      if (node) {
          if (node.left) {
              this.leftTraversal(node.left);
          }
          if (node.right) {
              this.leftTraversal(node.right);
          }
      } else {
          return;
      }

      this.values.push(node.data);
      return this.values;
  }

  removeNode(node, data) {
      if (!node) return;

      if (data > node.data) {
          let check = this.removeNode(node.right, data);
          if (check) node.right = null;
      } else if (data < node.data) {
          let check = this.removeNode(node.left, data);
          if (check) node.left = null;
      }

      if (node.data === data) {
          if (node.right) {
              let currValue = this.min(node.right);
              node.data = currValue;

              let check = this.removeNode(node.right, currValue);
              if (check) node.right = null;
          } else if (node.left) {
              let currValue = this.max(node.left);
              node.data = currValue;

              let check = this.removeNode(node.left, currValue);
              if (check) node.left = null;
          } else {
              return node;
          }
      }
  }

  add(data) {
      this.currRoot = this.nextLevelNode(this.currRoot, data);
  }

  has(data) {
      let hasData = this.hasValueNode(this.currRoot, data);

      return hasData ? true : false;
  }

  find(data) {
      let findData = this.hasValueNode(this.currRoot, data);

      return findData ? findData : null;
  }

  min(node = this.currRoot) {
      let arr = this.leftTraversal(node);
      this.values = [];

      if (arr) {
          return Math.min(...arr);
      }
  }

  max(node = this.currRoot) {
      let arr = this.leftTraversal(node);
      this.values = [];

      if (arr) {
          return Math.max(...arr);
      }
  }

  remove(data) {
      return this.removeNode(this.currRoot, data);
  }
}

module.exports = {
  BinarySearchTree
};