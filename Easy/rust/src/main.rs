use crate::leet::remove_duplicates_from_sorted_list::ListNode;

mod leet;

fn delete_duplicates(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
    let mut node = head?;
    let rest = delete_duplicates(node.next);
    match rest {
        Some(r) if r.val == node.val => Some(r),
        rest => {
            node.next = rest;
            Some(node)
        }
    }
}

fn main() {
    let mut list = Some(Box::new(ListNode {
        val: 1,
        next: Some(Box::new(ListNode {
            val: 2,
            next: Some(Box::new(ListNode {
                val: 2,
                next: Some(Box::new(ListNode { val: 3, next: None })),
            })),
        })),
    }));

    let res = delete_duplicates(list);
}
