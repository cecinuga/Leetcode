from typing import List


class Solution:
    def rotateFunction(self, nums: List[int], k: int) -> int:
        res = [ 0 for i in range(len(nums)) ]
        for i in range(len(nums)):
            res[(i+k)%len(nums)] = nums[i]*((i+k)%len(nums))

        return res

    def maxRotateFunction(self, nums: List[int]) -> int:
        if len(nums) <= 1:
            return 0
        
        sol = -float('inf')
        for i in range(len(nums)):
            sol = max(sol, sum(self.rotateFunction(nums, i)))

        return sol



solution = Solution()
print(solution.maxRotateFunction([4,3,2,6]))
