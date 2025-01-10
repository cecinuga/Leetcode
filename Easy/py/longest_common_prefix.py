class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        if len(min(strs)) == 0: return '' 

        max_length_str = max(strs)        
        strs.remove(max_length_str)
        joined_strs = f"-{'-'.join(strs)}"

        for i in range(len(max_length_str), 0, -1):
            if joined_strs.count(f'-{max_length_str[:i]}') >= len(strs):
                return max_length_str[:i]

        return ''



solution = Solution()

test_case_neg = [ "dog","racecar","car" ]
test_case_pos = ["aa","ab"]
test_case_neg = ["c","acc","ccc"]
test_case_pos = [ "flower","flow","flight" ]

print(solution.longestCommonPrefix(test_case_pos))
#print(solution.longestCommonPrefix(test_case_neg))