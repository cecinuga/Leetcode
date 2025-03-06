function canJump(nums: number[]): boolean {
    if ( nums.length == 0 || nums.length == 1 ) 
        return true

    let tank = nums[0];
    for ( let i = 1; i < nums.length; i++ ){
        if ( tank == 0 ) return false
        tank--
        
        if ( nums[i] > tank )
            tank += nums[i] - tank;
    }

    return true
};

const p1 = [2,2,0,2,0,2,0,0,2,0]
const p5 = [1,3,0,2,0,1]
const p2 = [1,4,0,2,1,0,1]
const p3 = [8,8,8,8]
const p4 = [1,5,0,2,0,1]

console.log(...p1, canJump(p1))
console.log(...p2, canJump(p2))
console.log(...p3, canJump(p3))
console.log(...p4, canJump(p4))
console.log(...p5, canJump(p5))