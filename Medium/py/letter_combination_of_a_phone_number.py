import math
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
        result = ['']*(3**len(digits))

        for i, digit in enumerate(digits):
            skip = 0
            for j, letter in enumerate(self.telephone[digit]):
                result[skip+j] = f'{result[skip+j]}{letter}'
                result[skip+j+1] = f'{result[skip+j+1]}{letter}'
                result[skip+j+2] = f'{result[skip+j+2]}{letter}'

                skip += 2

        return result

solution = Solution()
print(solution.letterCombinations(digits="23"))
print(solution.letterCombinations(digits="2"))