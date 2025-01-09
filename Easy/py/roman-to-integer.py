class Solution:
    def romanToInt(self, s: str) -> int:
        tot = 0
        previous = ''
        roman_dict = { 'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000 }

        for i in range(len(s)):
            if ( previous == 'I' and ( s[i] == 'V' or s[i] == 'X' ) ) or \
                ( previous == 'X' and ( s[i] == 'L' or s[i] == 'C' ) ) or \
                ( previous == 'C' and ( s[i] == 'D' or s[i] == 'M' ) ):
                tot += roman_dict[s[i]] - ( roman_dict[previous]*2 )
            else: tot += roman_dict[s[i]] 
            
            previous = s[i]

        return tot
    

solution = Solution()
print(solution.romanToInt("MCMXCIV"))