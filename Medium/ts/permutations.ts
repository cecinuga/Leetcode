function recPerm(permLength:number, nums:number[], perm:number[]=[], perms:number[][]=[]):number[][] {
    if ( perm.length == permLength ) 
        perms.push(perm) 

    for (var i = 0; i < nums.length; i++) {
        var left = nums.slice(0, i);
        var right = nums.slice(i + 1);
        var others = left.concat(right);

        if ( perm.length == permLength )
            perm = perm.slice(0, perm.length-nums.length)

        perm.push(nums[i])
        recPerm(permLength, others, perm, perms)
    }
    return perms
}

function permute(nums:number[]) {
    return recPerm(nums.length, nums);
}

const fact = (n: number) => {
    let tot = 1
    for ( let i=1; i <= n; i++ ){
        tot *= i
    }
    return tot
}

const input = [1,2,3,4,5]
const res = permute(input)
const lengthRes = res.length

console.log(res)
console.log(lengthRes, fact(input.length))