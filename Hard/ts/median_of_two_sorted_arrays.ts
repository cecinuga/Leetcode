function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const newArr = nums1.concat(nums2).sort((a, b) => a-b)
    //console.log(newArr, newArr.length%2  == 0 ? 'pari': 'dispari', newArr.length, newArr[newArr.length/2], newArr[Math.floor((newArr.length-1)/2)]/2)
    //console.log((newArr.length-1)/2,newArr[(newArr.length-1)/2])

    if(newArr.length%2  == 0 ) return ( (newArr[newArr.length/2]+newArr[Math.floor((newArr.length-1)/2)])/2 ) 
    return newArr[(newArr.length-1)/2]
};

const nums1 = [1,2,3,4,5]
const nums2 = [6,7,8,9,10,11,12,13,14,15,16,17]
console.log(findMedianSortedArrays(nums1, nums2))