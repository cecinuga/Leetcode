function findMin(nums: number[]): number {
    if ( nums.length == 1 ) return nums[0]
    else if ( nums.length == 2 ) return nums[0] < nums[1] ? nums[0] : nums[1] 

    if( nums[0] < nums[nums.length-1] ) return nums[0]

    const middle = Math.floor(nums.length/2)

    if ( nums[middle] < nums[middle-1] && nums[middle] < nums[middle+1] )
        return nums[middle]
    if ( nums[middle] > nums[middle-1] && nums[middle] > nums[middle+1] )
        return nums[middle+1]

    if ( nums[0] > nums[middle] )
        return findMin(nums.slice(0, middle))
    else
        return findMin(nums.slice(middle))
};

/*
const rota = [5,6,7,0,1,2,4]
const rotc = [2,4,5,6,7,0,1]
const rotb = [4,5,6,7,0,1,2]
const rote = [7,0,1,2,4,5,6]
const rotd = [0,1,2,3,4,5,7]*/
/*
const rota = [5,6,6,6,7,0,1,2,4]
const rotc = [2,4,5,6,6,7,0,1,1,1]
const rotb = [4,4,5,6,7,0,1,1,2]
const rote = [7,7,0,1,2,4,5,7]
const rotd = [0,0,0,1,2,3,4,5,7]

console.log(findMin(rota))
console.log(findMin(rotb))
console.log(findMin(rotc))
console.log(findMin(rotd))
console.log(findMin(rote))*/

