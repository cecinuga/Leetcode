function recPermute(nums: number[], perm: number[], res: number[][]){
    if ( nums.length == 0 ) return perm

    for( let i = 0; i < nums.length; i++ ){
        perm.push(perm[i])
        res.push(recPermute(nums.slice(i), perm, res))
    }
    return perm
}
/*
function permute(nums: number[]): number[][] {
    
};*/

console.log(recPermute([1,2,3], [], []))