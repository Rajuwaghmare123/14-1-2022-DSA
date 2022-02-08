// https://leetcode.com/problems/range-sum-of-bst/

var rangeSumBST = function(root, L, R) {
    let sum = 0;
    function inorder(node,low,high){
        if(node===null) return;
        if(node.val>low){
            inorder(node.left,low,high)
        }
        if(node.val>=low && node.val<=high){
            sum = sum + node.val
        }
        if(node.val<high){
            inorder(node.right,low,high)
        }
    }
    inorder(root,L,R);
    return sum
};