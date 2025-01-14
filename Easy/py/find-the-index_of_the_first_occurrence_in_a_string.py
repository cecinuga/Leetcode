class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        firstOcc, iterIndex = -1, 0
        for i, char in enumerate(haystack):
            if char == needle[iterIndex]:
                print('vero')
                iterIndex += 1
                if firstOcc == -1:
                    firstOcc = i
                if iterIndex == len(needle): return firstOcc

            else: 
                firstOcc = -1
                iterIndex = 0

            

            print(char, needle[iterIndex], iterIndex, firstOcc, i)

        return -1