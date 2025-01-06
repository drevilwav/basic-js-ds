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
    return (function search (node, value) {
      if (!node) {
        return false;
      }
      if (node.data === value) {
        return true;
      }
      return value < node.data
      ? search(node.left, value)
      : search(node.right, value)
    })(this.rootNode, data)
  }

  find(data) {
    return (function findNode(node, value) {
      if (!node) {
        return null;
      }
      if (node.data === value) {
        return node;
      }
      return value < node.data
      ? findNode(node.left, value)
      : findNode(node.right, value)
    })(this.rootNode, data);
  }

  remove(data) {
    this.rootNode = (function removeNode(node, value) {
      if (!node) {
        return null;
      }
      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.data) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }
        let minRight = (function findMin(n) {
          return n.left ? findMin(n.left) : n;
        })(node.right);
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    })(this.rootNode, data);
  }

  min() {
    if (!this.rootNode) {
      return null;
    }
    return (function getMin(node) {
      return node.left ? getMin(node.left) : node.data;
    })(this.rootNode);
  }

  max() {
    if (!this.rootNode) {
      return null;
    }
    return (function getMax(node) {
      return node.right ? getMax(node.right) : node.data;
    })(this.rootNode);
  }
}

module.exports = {
  BinarySearchTree
};