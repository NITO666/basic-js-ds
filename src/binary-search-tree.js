const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.rootNode = null;
  }

  root() {
    return this.rootNode ? this.rootNode :  null 
  }

  add(data, node = this.root()) {
    if (!this.root()) return this.rootNode = new Node(data);
    if (!node) return new Node(data);
    if (node.data === data) return node;
    if (data < node.data) node.left = this.add(data, node.left);
    else node.right = this.add(data, node.right);
    return node;
  }

  has(data, node = this.root()) {
    if (!node) return false;
    if (node.data === data) return true;
    return data < node.data ? this.has(data,node.left) : this.has(data,node.right);
  }

  find(data, node = this.root()) {
    if (!node) return null;
    if (node.data === data) return node;
    return data < node.data ? this.find(data,node.left) : this.find(data,node.right);
  }

  remove(data, node = this.root()) {
    if (data < node.data) node.left = this.remove(data, node.left);
    else if (data > node.data) node.right = this.remove(data, node.right);
    else if (node.left != null && node.right != null){
      node.data = this.min(node.right);
      node.right = this.remove(node.data,node.right);
    } else {
      if (node.left != null) node = node.left;
      else if (node.right != null) node = node.right;
      else node = null
    }
    return node;
  }

  min(node = this.root()) {
    if (node.left == null) return node.data;
    return this.min(node.left);
  }

  max(node = this.root()) {
    if (node.right == null) return node.data;
    return this.max(node.right);
  }

}

module.exports = {
  BinarySearchTree
};