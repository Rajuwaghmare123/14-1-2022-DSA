// https://leetcode.com/problems/validate-binary-search-tree/

var isValidBST = function(root) {
    if(root.left==null && root.right==null){
        return true;
    }
    const list = InOrder(root,[]);
    for(let i=0;i<list.length-1;i++){
        if(list[i]>=list[i+1]){
            return false;
        }
    }
    return true;

};

function InOrder(root,list){
    if(root.left){
        InOrder(root.left,list);
    }
    list.push(root.val);
    if(root.right){
        InOrder(root.right,list);
    }
    return list;
    
}