import ast
from lark import Lark

class Solution:
#    def __init__(self):
#        _grammar = r"""
#            start        : brackets

#            brackets     : round brackets | square brackets | curly brackets | 
          
#            round        : OPEN_ROUND  brackets CLOSE_ROUND 
#            square       : OPEN_SQUARE brackets CLOSE_SQUARE
#            curly        : OPEN_CURLY  brackets CLOSE_CURLY 

#            OPEN_ROUND   : "("
#            CLOSE_ROUND  : ")"
#            OPEN_SQUARE  : "["
#            CLOSE_SQUARE : "]"
#            OPEN_CURLY   : "{"
#            CLOSE_CURLY  : "}"

#            %import common.WS      
#            %ignore WS
#        self.parser = Lark(_grammar, parser="lalr")

    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {')': '(', ']': '[', '}': '{'}
        for char in s:
            if char in mapping: # closing brackets
                top_element = stack.pop() if stack else '#'
                if mapping[char] != top_element:
                    return False
            else:
                stack.append(char)
        return not stack
    

test_case_pass = "()[]{}"
test_case_not_pass = "(])"

solution = Solution()

print(solution.isValid(test_case_pass))
print(solution.isValid(test_case_not_pass))