class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  return helper(tree, -Infinity, Infinity);
}

function helper(tree, minVal, maxVal) {
  if (tree === null) return true;
  if (tree.value < minVal || tree.value >= maxVal) return false;
  const leftValid = helper(tree.left, minVal, tree.value);
  return leftValid && helper(tree.right, tree.value, maxVal);
}
