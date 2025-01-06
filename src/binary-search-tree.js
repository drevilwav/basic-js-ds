const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }


}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }


  root() {
    return this.rootNode;

  }

  add(data) {
    this.rootNode = (function insert(node, value) {
      if (!node) {
        return new Node(value);
      }
      if (value < node.data) {
        node.left = insert(node.left, value);
      } else if (value > node.data) {
        node.right = insert(node.right, value);
      }
      return node;
    })(this.rootNode, data);
  }


  has(data) {

  }

  find(/* data */) {

  }

  remove(/* data */) {

  }

  min() {

  }

  max() {

  }
}

module.exports = {
  BinarySearchTree
};