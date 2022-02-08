// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

var kthSmallest = function(root, k) {
    const minHeap = new MinPriorityQueue({
      priority: val => val
    });
    
    // Add all node values to the heap which automatically sorts them small -> big
    const rec = (node) => {
      if (!node) return;
      minHeap.enqueue(node.val);
      rec(node.left);
      rec(node.right);
    };
    rec(root);
  
    // Remove k-1 elements off the heap
    while (k > 1) {
      k--;
      minHeap.dequeue();
    }
  
    // Return the kth element
    return minHeap.front().element;
  };