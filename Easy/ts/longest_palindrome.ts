function longestPalindrome(s: string): number {
    let longPalLength: number = 0, lastToken: number = 0
    const freqMap: {[key: string]: number} = {}
    
    for ( let i = 0; i < s.length; i++ ) {
        freqMap[s[i]] ??= 0
        freqMap[s[i]]++
    }

    for ( let char in freqMap ) {
        lastToken = freqMap[char]%2 == 1 ? freqMap[char]%2 : lastToken
        longPalLength += freqMap[char]-freqMap[char]%2
    }
    
    return longPalLength+lastToken
};
