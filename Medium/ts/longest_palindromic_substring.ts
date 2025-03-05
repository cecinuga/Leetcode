function mirror(len: number, i: number){
    if (len == 1 || len == 2)
        return 0;

    const middle = Math.floor(len/2) 
    if ( i < middle ){
        return middle + ( middle - i )
    }
    else if ( i > middle ){
        return middle - ( i - middle )
    }
    return middle
}

function canIsPal(s: string, w: string){
    return Math.floor(s.length) <= Math.floor(w.length/2)+1
}

function longestPalindrome(s: string): string {
    if (s.length < 1) return "";

    let start = 0, end = 0;

    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(s, i, i);
        const len2 = expandAroundCenter(s, i, i + 1);
        const len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    return s.substring(start, end + 1);
}

function expandAroundCenter(s: string, left: number, right: number): number {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}

const input1 = "babad"
const res1 = longestPalindrome(input1)
const input2 = "aabba"
const res2 = longestPalindrome(input2)
const input3 = "aabca"
const res3 = longestPalindrome(input3)

console.log(res1)
console.log(res2)
console.log(res3)