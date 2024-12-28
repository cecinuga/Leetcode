import math


class Solution:
    def reverse(self, x: int) -> int:
        if( x == 0 or x.bit_length() > 31):
            return 0

        copy = abs(x)
        reversed = 0
        left, right = int(math.log10(copy)), 0

        while ( left >= 0 ):
            digit_value = (copy//(10**right)%10)*10**left
            reversed += digit_value
            copy -= (copy//(10**right)%10)*10**right
            right+=1
            left-=1

        if ( reversed.bit_length() > 31): return 0

        return int(reversed) if x > 0 else -int(reversed)
        



solution = Solution()
print(solution.reverse(1563847412))
