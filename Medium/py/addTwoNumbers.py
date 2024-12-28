import math
from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        x, y, i, j = 0, 0, 0, 0
        while l1 != None:
            x += l1.val*(10**(i))
            l1 = l1.next
            i += 1

        while l2 != None:
            y += l2.val*(10**(j))
            l2 = l2.next
            j += 1

        #print("X: ", x)
        #print("Y: ", y)

        totalSum = x+y
        digitsTotalSum = int(math.log10(abs(totalSum))) + 1 if totalSum else 1
        listSum = []

        while totalSum > 0:
            #print("totalSum: ", totalSum)
            #print("digitsTotalSum: ", digitsTotalSum)
            listSum.append(totalSum // 10**0 % 10 )
            #print("listSum: ", listSum)
            totalSum = totalSum // 10
            #print("totalSum: ", totalSum)
            digitsTotalSum -= 1
            #print("-----------------------")

        linkedSum = ListNode()
        def buildLinkedList(nums, startItem):
            if len(nums)>0:
                startItem.val=nums[0]
            if len(nums)>1:
                #print(startItem.val)
                startItem.next = ListNode()
                buildLinkedList(nums[1:], startItem.next)
            else: return

        buildLinkedList(listSum, linkedSum)
        return linkedSum