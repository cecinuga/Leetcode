function search(nums, target) {
  let left = 0, right = nums.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) {
      return mid;
    }
    
    // Check if the left side is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } 
    // Otherwise, the right side is sorted
    else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  
  return -1;
}

// Example usage:
const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 0;
console.log(search(nums, target));  // Expected output: 4

const rota = [5,6,7,0,1,2,4]//4
const rotb = [1,2,4,5,6,7,0]//0
const rotc = [2,4,5,6,7,0,1]//6
const rotd = [0,1,2,3,4,5,7]//1
const rote = [7,0,1,2,4,5,6]//2
const rotf = [1,2,4,5,6,8,9]//0
const roth = [7,8,0,2,4,5,6]//-1
const rotg = [7,8,9,1,4,5,6]//3
const roti = [8,1,2,3,4,5,6,7]//6

//console.log(search(rota, 1))
//console.log(search(rotb, 1))
//console.log(search(rotc, 1))
//console.log(search(rotd, 1))
//console.log(search(rote, 1))
//console.log(search(rotf, 1))
//console.log(search(roth, 1))
//console.log(search(rotg, 1))
//console.log(search(roti, 6))
