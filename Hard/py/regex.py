from collections import Counter

class Solution:    
    def isMatch(self, s: str, p: str) -> bool:
        def helper(r, s):
            if not r: return not s
            
            first_match = bool(s) and (r[0] == s[0] or r[0] == '.')
            if len(r) >= 2 and r[1] == '*':
                return helper(r[2:], s) or (first_match and helper(r, s[1:]))
            else:
                return first_match and helper(r[1:], s[1:])
        
        return helper(p, s)
    
str = 'abcdhbbcceeebbaee'
pattern = '.*.b*c*...bbae*'

solution = Solution()
print(solution.isMatch(str, pattern))



