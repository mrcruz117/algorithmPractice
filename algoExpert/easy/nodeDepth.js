function nodeDepths(root) {
  let sum = 0;
  let depth = 0;
  const inner = (tree, depth) => {
    sum += depth;
    if (tree.left) inner(tree.left, depth + 1);
    if (tree.right) inner(tree.right, depth + 1);
    // console.log(sum)
  };
  inner(root, depth);
  return sum;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
