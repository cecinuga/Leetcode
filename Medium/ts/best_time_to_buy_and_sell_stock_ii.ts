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
