/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const results = [];
    const preFixes = [nums[0]];
    const postFixes = [nums[nums.length - 1]];
    // Get product prefixes.
    for (let i = 1; i < nums.length; i++) {
        preFixes.push(nums[i] * preFixes[preFixes.length - 1]);
    }
    // Get product postfixes.
    for (let i = nums.length - 2; i >= 0; i--) {
        postFixes.unshift(nums[i] * postFixes[0]);
    }
    // Multiply prefix and postfixs for current number.
    for (let i = 0; i < nums.length; i++) {
        const left = preFixes[i - 1] !== undefined ? preFixes[i - 1] : 1;
        const right = postFixes[i + 1] !== undefined ? postFixes[i + 1] : 1;
        results.push(left * right);
    }
    return results;
};