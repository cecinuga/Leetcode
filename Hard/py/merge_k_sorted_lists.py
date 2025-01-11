from typing import List, Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution:
    def from_ll_to_l(self, input: ListNode, out: List[Optional[int]]=[]) -> List[Optional[int]]:
        if not input: return out

        out.append(input.val)
        return self.from_ll_to_l(input.next, out)

    def from_kll_to_kl(self,
                       kll:   List[Optional[ListNode]],
                       out:   List[Optional[List[Optional[int]]]] = []
        ):
        if not kll: return out

        internal_out = []
        out.append(self.from_ll_to_l(kll[0], internal_out))

        return self.from_kll_to_kl(kll[1:], out)


    def from_l_to_ll(self, 
                     input: List[Optional[List[Optional[int]]]], 
        ) -> Optional[ListNode]:

        value = input[0]

        if len(input) > 1:
            input = input[1:]  
        else:
            return ListNode(val=value, next=None)

        return ListNode(val=value, next=self.from_l_to_ll(input))


    def from_kl_to_kll(self, 
                     input: List[Optional[List[Optional[int]]]], 
                     out:   List[Optional[ListNode]]=[]
        ) -> List[Optional[ListNode]]:

            for list in input:
                out.append(self.from_l_to_ll(list))
        
            return out

    def merge(self, A: list[int], B: list[int]) -> list[int]:
        i, j = 0, 0
        p, r = 0, len(A)+len(B)
        C: list[int] = [0]*(len(A)+len(B))

        for k in range(r):
            if j == len(B) or A[i] <= B[j]:
                C[k] = A[i]
                i += 1
            elif i == len(A) or  B[j] <= A[i] :
                C[k] = B[j]
                j += 1

        return C

    def k_merge(self, lists: List[List[int]]) -> List[int]:
        print(lists)
        if len(lists) == 1: return lists[0]

        first_two_merged = self.merge(lists[0], lists[1])
        lists = lists[2:]
        lists.append(first_two_merged)

        return self.k_merge(lists)
            
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        if ( len(lists) == 0 or ( len(lists) == 1 and not lists[0]) ): return None

        kl = self.from_kll_to_kl(lists)
        merged_lists = self.k_merge(kl)

        return self.from_l_to_ll(merged_lists)

        


solution = Solution()

input = [[1,4,5],[1,3,4],[2,6]]
input = [[1]]

kll = solution.from_kl_to_kll(input)

print(solution.mergeKLists(lists=kll))