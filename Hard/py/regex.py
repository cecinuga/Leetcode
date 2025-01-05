class Solution:    
    def isMatch(self, s: str, p: str) -> bool:
        print(p, s)


        #cerca di costruire la stringa partendo dal pattern, buonanotte amore mio.
    

str = 'ab'
pattern = 'a.'

str = 'ab'
pattern = 'ab'

str = 'abrrr'
pattern = '.*'

str = 'mississippi'
pattern = 'mis*is*ip*.'

str = 'aa'
pattern = 'a'

str = 'abbbbbbbbbbbbbbbbbbbb'
pattern = 'ab*'

str = 'mississippi'
pattern = 'mis*is*p*.'

str = 'cdaab'
pattern = 'c.a.*b'

str = 'ab'
pattern = '.*c'

str = 'aab'
pattern = 'c*a*b'

str = 'aaa'
pattern = 'ab*a*c*a'

str = 'aa'
pattern = 'a*'

str = 'a'
pattern = 'ab*'

str = 'bbbba'
pattern = '.*a*a'

str = 'ab'
pattern = '.*..c*'

str = 'a'
pattern = '.*.'

solution = Solution()

print(solution.isMatch(str, pattern))



