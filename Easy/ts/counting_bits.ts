
function countBits(n: number): number[] {
    const result = new Array(n + 1).fill(0);

    for (let i = 0; i <= n; i++) {
        result[i] = result[Math.floor(i / 2)] + (i % 2 === 0 ? 0 : 1);
    }

    return result;
};

let n = 2
let res = countBits(n)
console.log(res)

n = 3
res = countBits(n)
console.log(res)

n = 5
res = countBits(n)
console.log(res)

n = 7
res = countBits(n)
console.log(res)
