from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def __init__(self):
        self.output = []

    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if not root: return []

        if root.left:
            self.inorderTraversal(root.left)

        self.output.append(root.val)

        if root.right:
            self.inorderTraversal(root.right)

        return self.output

l = TreeNode(val=3)
r = TreeNode(val=2, left=l)
root = TreeNode(val=1, right=r)


solution = Solution()
solution.inorderTraversal(root)
print(solution.output)