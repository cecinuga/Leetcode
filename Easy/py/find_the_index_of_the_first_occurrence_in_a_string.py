   
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if not needle:
            return 0
        prefix = [0] * len(needle)
        j = 0
        for i in range(1, len(needle)):
            while j > 0 and needle[i] != needle[j]:
                j = prefix[j - 1]
            if needle[i] == needle[j]:
                j += 1
                prefix[i] = j

        j = 0
        for i in range(len(haystack)):
            while j > 0 and haystack[i] != needle[j]:
                j = prefix[j - 1]
            if haystack[i] == needle[j]:
                j += 1
            if j == len(needle):
                return i - j + 1
        return -1


haystack = "babbbbbabb"
needle = "bbab"

solution = Solution()
#print(solution.strStr(haystack, needle))
print(solution.find_substring(haystack, needle))