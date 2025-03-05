function mirror(len, i) {
    if (len == 1 || len == 2)
        return 0;
    var middle = Math.floor(len / 2);
    if (i < middle) {
        return middle + (middle - i);
    }
    else if (i > middle) {
        return middle - (i - middle);
    }
    return middle;
}
function canIsPal(s, w) {
    return Math.floor(s.length) <= Math.floor(w.length / 2) + 1;
}
function longestPalindrome(s) {
    if (s.length < 1)
        return "";
    var start = 0, end = 0;
    for (var i = 0; i < s.length; i++) {
        var len1 = expandAroundCenter(s, i, i);
        var len2 = expandAroundCenter(s, i, i + 1);
        var len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    return s.substring(start, end + 1);
}
function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}
var input1 = "babad";
var res1 = longestPalindrome(input1);
var input2 = "aabba";
var res2 = longestPalindrome(input2);
var input3 = "aabca";
var res3 = longestPalindrome(input3);
console.log(res1);
console.log(res2);
console.log(res3);
