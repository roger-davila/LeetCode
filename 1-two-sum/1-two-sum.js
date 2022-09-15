/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numberMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (numberMap[nums[i]] !== undefined) return [numberMap[nums[i]], i];
        else numberMap[target - nums[i]] = i;
    }
    return [-1, -1];
};