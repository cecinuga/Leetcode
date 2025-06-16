class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        self.res = float('-inf')
        def dfs(root):
            if not root: return 0
            left = max(0,dfs(root.left))
            right = max(0,dfs(root.right))
            self.res = max(self.res,left+right+root.val)
            return max(left,right)+root.val
        dfs(root)
        return self.res
