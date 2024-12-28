from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i, num in enumerate(nums):
            delta = target - num
            if delta in nums[i+1:]:
                deltaIndex = nums.index(delta, i+1)
                return [i, deltaIndex]