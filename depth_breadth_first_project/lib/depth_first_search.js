function depthFirstSearch(root, targetVal) {
    let stack = [ root ];
    while (stack.length) {
        let node = stack.pop();
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
}


module.exports = {
    depthFirstSearch
};