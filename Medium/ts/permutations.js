function recPermute(nums, perm, res) {
    if (nums.length == 0)
        return perm;
    for (var i = 0; i < nums.length; i++) {
        perm.push(perm[i]);
        res.push(recPermute(nums.slice(i), perm, res));
    }
    return perm;
}
function permute(nums) {
}
;
console.log(recPermute([1, 2, 3], [], []));
