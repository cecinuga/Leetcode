function lenLongestFibSubseq(arr: number[]): number {
  const n = arr.length;
  const indexMap = new Map<number, number>();
  for (let i = 0; i < n; i++) {
      indexMap.set(arr[i], i);
  }

  const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
  let maxLen = 0;
  
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < i; j++) {
          const kVal = arr[i] - arr[j];
          const k = indexMap.get(kVal);
          if (k !== undefined && k < j) {
              dp[j][i] = dp[k][j] > 0 ? dp[k][j] + 1 : 3;
              maxLen = Math.max(maxLen, dp[j][i]);
          }
      }
  }
  
  return maxLen;
};

let arr = [2,4,7,8,9,10,14,15,18,23,32,50]
let res = lenLongestFibSubseq(arr)
