function searchMin(nums, left, right) {
    if (right - left == 0)
        return left;
    else if (right - left == 1)
        return nums[left] < nums[right] ? left : right;
    if (nums[left] < nums[nums.length - 1])
        return left;
    var middle = right - Math.floor((right - left) / 2);
    if (nums[middle] < nums[middle - 1] && nums[middle] < nums[middle + 1])
        return middle;
    if (nums[middle] > nums[middle - 1] && nums[middle] > nums[middle + 1])
        return middle + 1;
    if (nums[left] > nums[middle])
        return searchMin(nums, left, middle);
    else
        return searchMin(nums, middle, right);
}
;
function recSearch(nums, left, right, target) {
    var middle = right - Math.ceil((right - left) / 2);
    console.log(left, middle, right);
    if (right - target == 0 && nums[left] == target)
        return left;
    else if (left - right == 0 && nums[left] != target)
        return -1;
    else if (right - left == 1 && nums[left] == target)
        return left;
    else if (right - left == 1 && nums[right] == target)
        return right;
    else if (right - left == 1 && nums[left] != target && nums[right] != target)
        return -1;
    else if (nums[middle] == target)
        return middle;
    else if (nums[left] == target)
        return left;
    else if (nums[right] == target)
        return right;
    var min = searchMin(nums, left, right);
    if (nums[min] == target)
        return min;
    if (((min == left || min == right) && nums[middle] > target) ||
        (min == middle && nums[right] <= target) ||
        ((min != left && min != right && min != middle) && nums[middle] > target))
        return recSearch(nums, left, middle, target);
    else if ((min == middle && nums[right] >= target) ||
        (nums[middle] < target))
        return recSearch(nums, middle, right, target);
    return -1;
}
function search(nums, target) {
    return recSearch(nums, 0, nums.length - 1, target);
}
;
var rotz = [4, 5, 6, 7, 0, 1, 2];
console.log(search(rotz, 1));
var rota = [5, 6, 7, 0, 1, 2, 4]; //4
var rotb = [1, 2, 4, 5, 6, 7, 0]; //0
var rotc = [2, 4, 5, 6, 7, 0, 1]; //6
var rotd = [0, 1, 2, 3, 4, 5, 7]; //1
var rote = [7, 0, 1, 2, 4, 5, 6]; //2
var rotf = [1, 2, 4, 5, 6, 8, 9]; //0
var roth = [7, 8, 0, 2, 4, 5, 6]; //-1
var rotg = [7, 8, 9, 1, 4, 5, 6]; //3
var roti = [8, 1, 2, 3, 4, 5, 6, 7]; //6
//console.log(search(rota, 1))
//console.log(search(rotb, 1))
//console.log(search(rotc, 1))
//console.log(search(rotd, 1))
//console.log(search(rote, 1))
//console.log(search(rotf, 1))
//console.log(search(roth, 1))
//console.log(search(rotg, 1))
//console.log(search(roti, 6))
