// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  let sums = [];
  let sum = 0;

  const inner = (tree, sum) => {
    if (!tree) return;

    sum += tree.value;
    if (!tree.left && !tree.right) {
      sums.push(sum);
      return;
    }
    inner(tree.left, sum);
    inner(tree.right, sum);
  };
  inner(root, sum);
  return sums;
}
