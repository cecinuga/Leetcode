function maxProfit(prices: number[]): number {
    if ( prices.length < 2 ) return 0

    let maxProfit = 0,
        start = 0,
        end = 1

    while ( end < prices.length ){
        if ( prices[start] < prices[end] ){
            maxProfit += prices[end] - prices[start]
            start++
            end++
            continue
        } 
        start = end
        end++
    }

    return maxProfit
};

const profit1 = maxProfit([7,1,5,3,6,4])
const profit2 = maxProfit([1,2,3,4,5])
const profit3 = maxProfit([34,82,16,74,55,46,44,25,96,80,51,62,73,26,76,30,20,30,55,6,3,93,74,80,8,13,3,82,1,35,68,22,81,63,77,41,51,84,36,46,86,71,5,65,65,91,97,57,92,96,57,97,74,33,19,42,44,22,12,26])

console.log(profit1)
console.log(profit2)
console.log(profit3)