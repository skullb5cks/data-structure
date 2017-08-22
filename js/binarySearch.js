function Node(value) {
    this.data = value;
    this.left = null;
    this.right = null;
}


function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.insertNode = function(value) {
    var node = new Node(value),
        currentNode;

    if (!this.root) {
        this.root = node;
    } else {
        currentNode = this.root;

        while (currentNode) {
            if (value < currentNode.data) {
                if (!currentNode.left) {
                    currentNode.left = node;
                    break;
                } else {
                    currentNode = currentNode.left;
                }
            } else if (value > currentNode.data) {
                if (!currentNode.right) {
                    currentNode.right = node;
                    break;   
                } else {
                    currentNode = currentNode.right;
                }
            } else {
                new Error();
            }
        }
    }
}

BinarySearchTree.prototype.preOrderTraversal = function (root) {
  console.log(root.data);

  if (root.left) {
    this.preOrderTraversal(root.left);
  } 
  if (root.right) {
    this.preOrderTraversal(root.right);
  }
};

var BST = new BinarySearchTree();
BST.insertNode(10);
BST.insertNode(15);
BST.insertNode(5);
BST.insertNode(2);
BST.insertNode(3);
BST.insertNode(12);
BST.insertNode(17);
BST.preOrderTraversal(BST.root);
// console.log(BST);