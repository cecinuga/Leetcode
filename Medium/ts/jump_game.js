var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function canJump(nums) {
    if (nums.length == 0 || nums.length == 1)
        return true;
    var tank = nums[0];
    for (var i = 1; i < nums.length; i++) {
        if (tank == 0)
            return false;
        tank--;
        if (nums[i] > tank)
            tank += nums[i] - tank;
    }
    return true;
}
;
var p1 = [2, 2, 0, 2, 0, 2, 0, 0, 2, 0];
var p5 = [1, 3, 0, 2, 0, 1];
var p2 = [1, 4, 0, 2, 1, 0, 1];
var p3 = [8, 8, 8, 8];
var p4 = [1, 5, 0, 2, 0, 1];
console.log.apply(console, __spreadArray(__spreadArray([], p1, false), [canJump(p1)], false));
console.log.apply(console, __spreadArray(__spreadArray([], p2, false), [canJump(p2)], false));
console.log.apply(console, __spreadArray(__spreadArray([], p3, false), [canJump(p3)], false));
console.log.apply(console, __spreadArray(__spreadArray([], p4, false), [canJump(p4)], false));
console.log.apply(console, __spreadArray(__spreadArray([], p5, false), [canJump(p5)], false));
