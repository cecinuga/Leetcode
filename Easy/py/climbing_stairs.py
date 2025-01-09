import math

class Solution:
    def binom(self, n: int, k: int) -> int:
        return math.factorial(n)/(math.factorial(k)*math.factorial(n-k))
    
    def climbStairs(self, n:int) -> int:
        tot = 0
        for n_bit in range(math.floor(int(n)/2)+1):
            tot += self.binom(n-n_bit, n_bit)
        
        return int(tot)

#2 => 2
#3 => 3
#4 => 5
solution = Solution()
print(solution.climbStairs(6))