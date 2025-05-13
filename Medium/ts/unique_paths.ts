function uniquePaths(m: number, n: number): number {
    const dp: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
    
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    
    return dp[m - 1][n - 1];
};

let m = 3
let n = 2
let res = uniquePaths(m, n)

m = 3
n = 7
res = uniquePaths(m, n)