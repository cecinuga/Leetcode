/*
def merge(A: list[int], p: int, q: int, r: int):
    first_len = q - p 
    second_len = r - q

    L = [0] * first_len
    R = [0] * second_len

    for i in range(first_len):
        L[i] = A[p+i]

    for j in range(second_len):
        R[j] = A[q+j]

    i, j = 0, 0

    for k in range(p, r):
        if j == len(R) or L[i] <= R[j]:
            A[k] = L[i]
            i += 1
        elif i == len(L) or  R[j] <= L[i] :
            A[k] = R[j]
            j += 1
  
*/

function swap(nums1, nums2, i, j){
    let temp = nums1[i]
    nums1[i] = nums2[j]
    nums2[j] = temp
}

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let app = []
    let j = 0, k = 0

    for ( let i=0; i < m+n; i++ ){
       if ( j < m && ( nums1[j] <= nums2[k] || k == n )){
        app.push(nums1[j])
        j++
       } else if ( k < n && ( nums1[j] >= nums2[k] || j == m )) {
        app.push(nums2[k])
        k++
       } 
    }
    
    for ( let i=0; i < m+n; i++ ){
        nums1[i] = app[i]
    }
};

let nums1 = [1,5,6,0,0,0]
let nums2 = [2,5,6]

console.log(nums1)
console.log(nums2)

merge(nums1,3,nums2,3)
