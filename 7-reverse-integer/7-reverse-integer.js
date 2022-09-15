/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    let reversedInteger = x < 0 ? '-' : '';
    let stringNum = String(Math.abs(x));
    let parsedInteger = 0;
    for (let i = stringNum.length - 1; i > -1; i--) {
        reversedInteger += stringNum[i];
    }
    parsedInteger = parseInt(reversedInteger);
    let isWithinRange = 2**31 - 1 >= parsedInteger && -(2**31) <= parsedInteger ? true : false;
    return typeof parsedInteger  === 'number' && isWithinRange ? parsedInteger : 0;
};