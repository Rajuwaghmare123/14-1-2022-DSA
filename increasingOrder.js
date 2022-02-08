// https://leetcode.com/problems/increasing-order-search-tree/

var increasingBST = function(root) {
    let treeNode = null;
    let prev = null
    
    function preOrderTraverse(root) {
        if (!root) return;
        
        if (root.left) preOrderTraverse(root.left);
        
        if (!treeNode) {
            treeNode = new TreeNode(root.val);
            prev = treeNode;
        } else {
            prev.right = new TreeNode(root.val);
            prev = prev.right;
        }
        
        if (root.right) preOrderTraverse(root.right);
    }
    
    preOrderTraverse(root)
    return treeNode;
};