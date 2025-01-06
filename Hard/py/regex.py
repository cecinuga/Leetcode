from collections import Counter

class Solution:    
    def __init__(self):
        self.context = ''
        self.pattern_frequency = None
        self.pattern_frequency_checker = False
        self.kleene_positions = []
        self.alphabet = {'a': 1, 'b': 1, 's': 1, 'c': 1, 'd': 1, 'e': 1, 'f': 1, 'g': 1, 'h': 1, 'i': 1, 'l': 1, 'm': 1, 'n': 1, 'o': 1, 'p': 1, 'q': 1, 'r': 1, 'u': 1, 'v': 1, 'z': 1, 'k': 1, 'j': 1, 'y': 1}

    def kleene_reference_positions(self, sym: str, p: str):
        return [ i-1  for i, ptr in enumerate(p) if ptr == sym ]

    def legit_prod(self, sym: str, syntax_category: str):
        if syntax_category == '.' or ( self.alphabet[syntax_category] == 1 and sym == syntax_category ): # . | a
            return True
        return False
    
    def min_pattern_occ(self, p: str) -> int:
        min_occ = len(p)-self.pattern_frequency['*']*2
        print(f'min_occ: {min_occ}')
        return min_occ
    
    def certain_occ(self, s: str, p: str) -> int:
        certain_occ = len(s) - self.min_pattern_occ(p)
        print(f'certain_occ: {certain_occ}')
        return certain_occ
    
    def kleene_index(self, s: str, p: str, pos: list[int]) -> int:
        print('----------------------')
        print(s, p, pos)
        if len(pos) == 0: return 0
        kleene_index = self.certain_occ(s, p) - self.kleene_index(s, p[pos[0]:], pos[1:])
        return kleene_index


    def isMatch(self, s: str, p: str) -> bool:
        print(f'{p} , {s}')
        if not self.pattern_frequency_checker:
            self.kleene_positions = self.kleene_reference_positions('*', p)
            self.pattern_frequency = Counter(p)

        if s == p: return True
        if len(s) == 0: return False

        if len(p) > 1 and p[1] == '*':
            kleene_index = self.kleene_index(s, p, self.kleene_positions)
            print(kleene_index)
            return
            return self.isMatch()
        elif not self.legit_prod(s[0], p[0]):
            return False

        print('----------------------------------')
        return self.isMatch(s[1:], p[1:])
        # cerca di costruire la stringa partendo dal pattern, buonanotte amore mio.
        # quando incontri Kleene usa un'altra volta la ricorsione, chiami ( isMatch con p[INDICE SUBITO DOPO KLEENE] s[INDICE SUBITO DOPO KLEENE] ) e isMatch con p[0:2] s[INDICE KLEENE]

str = 'abbbbbbbccccc'
pattern = 'ab*c*dddc'

solution = Solution()
print(solution.isMatch(str, pattern))



