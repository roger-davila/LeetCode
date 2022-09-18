/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const results = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let [left, right] = [i + 1, nums.length - 1];
        while (left < right) {
            const threeSum = nums[i] + nums[left] + nums[right];
            if (threeSum > 0) right -= 1;
            else if (threeSum < 0) left += 1;
            else {
                results.push([nums[i], nums[left], nums[right]]);
                left += 1;
                while (nums[left] === nums[left - 1] && left < right) left += 1;
            } 
        }
    }
    return results;
};