import numpy as np

class Solution:
    def findScore(self, nums: list):
        score = 0
        sortIndex = np.argsort(nums, kind='stable')
        marked = [ False for i in nums ]

        i = 0
        counter = 0

        while counter < len(nums):
            iNum = sortIndex[i]
            i += 1

            if not marked[iNum]:
                score += nums[iNum]
                marked[iNum] = True
                counter+=1
                if iNum < len(nums) - 1 and not marked[iNum+1]:
                    counter+=1
                    marked[iNum+1] = True
                    
                if iNum > 0 and not marked[iNum-1]:
                    marked[iNum-1] = True
                    counter+=1
        return score