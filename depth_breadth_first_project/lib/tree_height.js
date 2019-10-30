function treeHeight(root) {
    // debugger
    if(root === null) return 0
    let leftHeight = treeHeight(root.left) + 1
    let rightHeight = treeHeight(root.right) + 1
    return  leftHeight > rightHeight ? leftHeight : rightHeight
}


module.exports = {
    treeHeight
};