// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');

function buildTree(preorder, inorder) {
    let newPreorder = preorder.filter(el => inorder.indexOf(el) != -1)
    let treeRootValue = newPreorder[0]
    let rootIndex = inorder.indexOf(treeRootValue)
    let rightTreeInorder = inorder.slice(rootIndex + 1)
    let leftTreeInorder = inorder.slice(0, rootIndex)
    // debugger
    if(newPreorder.length > 2){
        // have both right and left
        return new TreeNode(treeRootValue, 
            buildTree(newPreorder, leftTreeInorder),
            buildTree(newPreorder, rightTreeInorder))
    }
    else if(newPreorder.length === 2 ){
        // no left
        if(inorder[0] == treeRootValue){
            return new TreeNode(treeRootValue, 
                null,
                buildTree(newPreorder, rightTreeInorder))        
        }
        // no right
        return new TreeNode(treeRootValue, 
            buildTree(newPreorder, leftTreeInorder),
            null) 
    } else if(newPreorder.length === 1){
        // single node 
        // debugger
        return new TreeNode(newPreorder[0], null, null)
    }
}
