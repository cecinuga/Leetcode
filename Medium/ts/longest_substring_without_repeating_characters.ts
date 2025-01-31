const lengthOfLongestSubstring = (s: string): number => {
    if ( s.length == 0 ) return 0
    if ( s.length == 1 ) return 1

    let dict: Object = {}
    let left = 0
    let maxLength = 0

    for ( let right = 0; right < s.length; right++ ){
        if( !dict.hasOwnProperty(s[right]) || dict[s[right]] < left ){
            dict[s[right]] = right
            maxLength = Math.max(maxLength, right - left + 1)
        }
        else {
            left = dict[s[right]] + 1
            dict[s[right]] = right
        }
    }
    return maxLength
}