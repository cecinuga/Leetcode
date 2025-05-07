function isSubsequence(s: string, t: string): boolean {
    if ( s.length === 0 ) return true

    let count = 0
    for ( const c of t ){
        if ( c === s[count] ) count++
        if ( count === s.length ) return true
    }
    return false
};

let s = "abc"
let t = "ahbgdc"
console.log(isSubsequence(s, t))

s = "axc"
t = "ahbgdc"
console.log(isSubsequence(s, t))