class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        k = len(nums)
        delta = 0
        for i in range(len(nums)):
            if nums[i-delta] == val:
                del nums[i-delta]
                k -= 1
                delta += 1
        return k