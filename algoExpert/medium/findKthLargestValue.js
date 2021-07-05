class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
  var treeValues = [];
  function treeValuePush(tree) {
    if (tree !== null) {
      treeValuePush(tree.left);
      treeValues.push(tree.value);
      treeValuePush(tree.right);
    }
    // console.log(treeValues)
  }
  treeValuePush(tree);
  return treeValues[treeValues.length - k];
}
