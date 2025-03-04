function maxSubArray(nums: number[]): number {
    let actual = 0
    let max = -Infinity

    for ( let right = 0; right < nums.length; right++ ){
        if (nums[right] > actual + nums[right]){
            actual = 0
        }
        actual += nums[right]
        if ( actual > max ) 
            max = actual
    }
    return max
};

const nums = [-2,1,-3,4,-1,2,1,-5,4]
const nums2 = [1,2]
const nums3 = [-2,-1]
const nums4 = [-1,-2]
const nums5 = [-1,-1,-2,-2]
const nums6 = [0,-2,-3]
const nums7 = [8,-19,5,-4,20]

const res = maxSubArray(nums)
const res2 = maxSubArray(nums2)
const res3 = maxSubArray(nums3)
const res4 = maxSubArray(nums4)
const res5 = maxSubArray(nums5)
const res6 = maxSubArray(nums6)
const res7 = maxSubArray(nums7)

console.log(res)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)
console.log(res6)
console.log(res7)