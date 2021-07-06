class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }
}

function reconstructBst(preOrderTraversalValues) {
  const root = new BST(preOrderTraversalValues[0]);

  for (let i = 1; i < preOrderTraversalValues.length; i++) {
    const currentValue = preOrderTraversalValues[i];
    root.insert(currentValue);
  }
  return root;
}
