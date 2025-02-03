function linearFindMin(nums) {
    var min = Infinity;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var n = nums_1[_i];
        if (n < min)
            min = n;
    }
    return min;
}
function findMin(nums) {
    console.log(nums);
    if (nums.length == 1)
        return nums[0];
    else if (nums.length == 2)
        return nums[0] < nums[1] ? nums[0] : nums[1];
    if (nums[0] < nums[nums.length - 1])
        return nums[0];
    var middle = Math.floor((nums.length - 1) / 2);
    console.log(middle);
    console.log('----------------------');
    if (nums[middle] < nums[middle - 1] && nums[middle] <= nums[middle + 1])
        return nums[middle];
    if (nums[middle] > nums[middle - 1] && nums[middle] > nums[middle + 1])
        return nums[middle + 1];
    else if ((nums[0] > nums[middle]) || (nums[0] == nums[nums.length - 1] && nums[0] > nums[1]))
        return findMin(nums.slice(0, middle));
    else if (!((nums[0] > nums[middle]) || (nums[0] == nums[nums.length - 1] && nums[0] > nums[1])))
        return findMin(nums.slice(middle));
}
;
var t66 = [3, 3, 1, 3, 3, 3, 3, 3, 3];
console.log(findMin(t66));
console.log("=================================================");
/*
const t184 = [1,2,0,1,1,1]
console.log(findMin(t184))


const t65 = [3,1,1,3,3,3]
console.log(findMin(t65))

const rote = [7,7,0,1,2,4,5,7]
console.log(findMin(rote))


const rota = [5,6,6,6,7,0,1,2,4]
const rotc = [2,4,5,6,6,7,0,1,1,1]
const rotb = [4,4,5,6,7,0,1,1,2]
const rotd = [0,0,0,1,2,3,4,5,7]

console.log(findMin(rota))
console.log(findMin(rotb))
console.log(findMin(rotc))
console.log(findMin(rotd))
*/ 
