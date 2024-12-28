function isPalindrome(x) {
    var reverse = 0;
    var copy = x;
    while (copy > 0) {
        var digit = copy % 10;
        reverse = reverse * 10 + digit;
        copy = ~~(copy / 10);
        console.log(digit, reverse, x);
    }
    return x == reverse;
}
;
/*
function isPalindrome(x: number): boolean {
    if ( x < 0 ) return false
    if ( x == 0 ) return true

    const numLength = 1 + Math.floor(Math.log(x)/Math.log(10))
    if ( numLength == 1 ) return true

    const binaryCheck = (i:number=0, j:number=numLength-1) => {
        const [left, right] = [Math.floor((x/10**i)%10), Math.floor((x/10**j)%10)]
        if ( (i == j || i == j-1) ) return left == right
        if ( left == right ) return binaryCheck(i+1, j-1)
        return false
    }

    return binaryCheck()
};
*/
var numFalse = 123;
var numTrue = 101;
console.log(numFalse);
console.log(isPalindrome(numFalse));
console.log('---------');
console.log(numTrue);
console.log(isPalindrome(numTrue));
console.log('---------');
