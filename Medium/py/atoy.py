import re

MAX_INT_31BIT = 2147483648

class Solution:
    def round_31bit(self, n: int) -> int:
        if n.bit_length() > 31:
            if n < 0:
                return -MAX_INT_31BIT
            else:
                return MAX_INT_31BIT-1
        return n

    def myAtoi(self, s: str) -> str:
        pattern = "^\s*(-|\+)?([0-9]*)"
        match = re.match(pattern, s)
        print(match)
        if match is not None:
            result = match.string[match.start():match.end()]
            if len(result) > 0:
                res_no_whites = result.replace(" ", "")
                if res_no_whites == '-' or res_no_whites == "+" or len(res_no_whites) == 0:
                    return 0
                return self.round_31bit(int(res_no_whites))
            return 0
        return 0


solution = Solution()
sol = solution.myAtoi("3.14159")

print(sol)
