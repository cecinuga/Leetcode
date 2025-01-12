from typing import List, Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:    
        min = float('inf')
        min_value = float('inf')

        for i, list in enumerate(lists):
            if list and list.val < min_value:
                min = i
                min_value = lists[min].val
        
        if min != float('inf'):
            value = lists[min].val
            lists[min] = lists[min].next
            return ListNode(val=value, next=self.mergeKLists(lists))
        return None
        

        


