import itertools
from typing import List


class Solution:
    def __init__(self):
        self.telephone = {
            '2': ['a', 'b', 'c'],
            '3': ['d', 'e', 'f'],
            '4': ['g', 'h', 'i'],
            '5': ['j', 'k', 'l'],
            '6': ['m', 'n', 'o'],
            '7': ['p', 'q', 'r', 's'],
            '8': ['t', 'u', 'v'],
            '9': ['w', 'x', 'y', 'z'],
        }

    def letterCombinations(self, digits: str) -> List[str]:
        if not digits: return []
        result = []

        ranges = [[letters for letters in self.telephone[digit]] for digit in digits] 
        for i, combination in enumerate(itertools.product(*ranges)):
            result.append(''.join(combination))

        return result

solution = Solution()
print(solution.letterCombinations(digits="23"))
print(solution.letterCombinations(digits="7"))