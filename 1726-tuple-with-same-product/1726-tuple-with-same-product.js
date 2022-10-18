/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    const uniqueProducts = new Map();
    let permutations = 0;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const product = nums[i] * nums[j];
            if (uniqueProducts.has(product)) {
                uniqueProducts.get(product).push(nums[i], nums[j]);
            }
            else {
                uniqueProducts.set(product, [nums[i], nums[j]]);
            }
        }
    }
    for (const [product, nums] of uniqueProducts) {
        if (nums.length > 2) {
            const pairs = nums.length / 2;
            permutations += (pairs * (pairs - 1) / 2) * 8;
        }
    }
    return permutations;
};