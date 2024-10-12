// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Time -> O(N) where n is the number of nodes | Space -> O(h) where h is the height of the tree

function evaluateExpressionTree(tree) {
  if (tree.value > 0) return tree.value;
  if (tree.value === -1) return evaluateExpressionTree(tree.left) + evaluateExpressionTree(tree.right);
  if (tree.value === -2) return evaluateExpressionTree(tree.left) - evaluateExpressionTree(tree.right);
  if (tree.value === -3) {
    if ((evaluateExpressionTree(tree.left) / evaluateExpressionTree(tree.right)) > 0) {
      return Math.floor(evaluateExpressionTree(tree.left) / evaluateExpressionTree(tree.right));
    } else {
      return Math.ceil(evaluateExpressionTree(tree.left) / evaluateExpressionTree(tree.right));
    }
  }
  if (tree.value === -4) return evaluateExpressionTree(tree.left) * evaluateExpressionTree(tree.right);
  
}


