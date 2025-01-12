from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:        
    def comparison(self, A: Optional[ListNode], B: Optional[ListNode]) -> Optional[ListNode]:
        if ( not B and A ) or ( A and A.val <= B.val ):
            return [A.val, A.next, B]
        elif ( not A and B ) or ( B and B.val <= A.val ) :
            return [B.val, B.next, A]
        
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if not list1 and not list2: return None

        comparison = self.comparison(list1, list2)

        return ListNode(val=comparison[0], next=self.merge(comparison[1], comparison[2]))