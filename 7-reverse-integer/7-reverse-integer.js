/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    const reversedInteger = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    if (reversedInteger > 2**31) return 0;
    return x > 0 ? reversedInteger : -reversedInteger;
};