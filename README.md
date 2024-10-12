**Evaluate Expression Tree**

This repository contains a function evaluateExpressionTree that evaluates a binary expression tree. A binary expression tree is a special kind of binary tree used to represent arithmetic expressions, where each node is either an operator or an operand.

**Problem Description**

Given a binary tree where:

Positive integer values (greater than 0) represent numbers.

Negative integer values represent arithmetic operations:

	-1 for addition (+)
	-2 for subtraction (-)
	-3 for division (/)
	-4 for multiplication (*)
 
The goal of the function is to recursively evaluate the expression tree and return the result of the arithmetic expression.

**Code Explanation**

Class Definition: The BinaryTree class is used to define the structure of the nodes in the tree. Each node contains:

  value: an integer that represents either a number or an arithmetic operator.
  left: a reference to the left child of the tree.
  right: a reference to the right child of the tree.
  
Function: evaluateExpressionTree(tree)

This function recursively traverses the binary expression tree and evaluates the expression it represents.

Base case: If the node's value is greater than 0, it is an operand (a number), so the function simply returns this value.

Recursive case: If the node's value represents an operator (-1 for addition, -2 for subtraction, -3 for division, -4 for multiplication), the function recursively evaluates its left and right children and applies the corresponding arithmetic operation.

Division: For division (-3), the function ensures that the result is properly floored or ceiled based on the sign of the result, providing the result goes towards zero.

Time Complexity: O(N) Where N is the number of nodes in the tree, since each node is visited once.

Space Complexity: O(h) Where h is the height of the tree. The space complexity is driven by the depth of the recursion stack, which can go as deep as the height of the tree.

Example

	// Create the tree nodes
	let tree = new BinaryTree(-1); // This node represents addition (+)
	tree.left = new BinaryTree(4); // Left child is a number (4)
	tree.right = new BinaryTree(-2); // Right child represents subtraction (-)
	tree.right.left = new BinaryTree(10); // Left child of right node is 10
	tree.right.right = new BinaryTree(3); // Right child of right node is 3

	console.log(evaluateExpressionTree(tree)); // Output: 11 (4 + (10 - 3) = 11)
 

License
This project is licensed under the MIT License - see the LICENSE file for details.

