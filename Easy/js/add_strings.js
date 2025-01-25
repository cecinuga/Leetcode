/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

function autoConverter(num){
    let out = 0
    for( let i = 0; i < num.length; i++ ){
        let toSum = 0
        switch(num[i]){
            case "0":
                toSum=0*(10**(num.length-1-i))
                break
            case "1":
                toSum=1*(10**(num.length-1-i))
                break
            case "2":
                toSum=2*(10**(num.length-1-i))
                break
            case "3":
                toSum=3*(10**(num.length-1-i))
                break
            case "4":
                toSum=4*(10**(num.length-1-i))
                break
            case "5":
                toSum=5*(10**(num.length-1-i))
                break
            case "6":
                toSum=6*(10**(num.length-1-i))
                break
            case "7":
                toSum=7*(10**(num.length-1-i))
                break
            case "8":
                toSum=8*(10**(num.length-1-i))
                break
            case "9":
                toSum=9*(10**(num.length-1-i))
                break
        }
        out += toSum
    }
    return out
}

var addStrings = function(num1, num2) {
    num1Int = autoConverter(num1)
    num2Int = autoConverter(num2)

    let sum = num1Int + num2Int
    return sum.toString()
};

let n1 = "9333852702227987"
let n2 = "85731737104263"

console.log(addStrings(n1, n2))