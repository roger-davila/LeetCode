/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const results = [];
    let prefixProduct = 1;
    let postfixProduct = 1;
    
    for (let i = 0; i < nums.length; i++) {
        results[i] = prefixProduct;
        prefixProduct *= nums[i];
    }
    
    for (let j = nums.length - 1; j >= 0; j--) {
        results[j]*=postfixProduct;
        postfixProduct *= nums[j];
    }
    
    return results;
};