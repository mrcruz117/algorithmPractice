// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  const inOrderTraversalOrder = getInOrderTraversalOrder(tree);
  for (let i = 0; i < inOrderTraversalOrder.length; i++) {
    const currentNode = inOrderTraversalOrder[i];
    if (currentNode !== node) continue;

    if (i === inOrderTraversalOrder.length + 1) return null;

    return inOrderTraversalOrder[i + 1];
  }
}

function getInOrderTraversalOrder(node, order = []) {
  if (node === null) return order;

  getInOrderTraversalOrder(node.left, order);
  order.push(node);
  getInOrderTraversalOrder(node.right, order);
  return order;
}
