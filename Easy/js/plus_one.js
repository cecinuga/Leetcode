/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length-1
    let resto = 1;
    while ( resto != 0 ){
        digits[i] += resto
        if ( digits[i] > 9 ) {
            digits[i] = 0
        } else { resto = 0 }
        
        i--
        if( i == -1 && resto > 0 ) {
            digits.push(0)
            digits[i+1] = resto
            resto = 0
        }
    }
    return digits
};

console.log(plusOne([0]))