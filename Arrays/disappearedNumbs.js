// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

var findDisappearedNumbers = function(nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    let j = 0;
    let n = nums.length;
    for (let i = 1; i <= n; i++) {
        // Skip duplicates in nums
        while (j < n - 1 && nums[j] === nums[j + 1]) {
            j++;
        }
        if (nums[j] !== i) {
            result.push(i);
        } else {
            j++;
        }
    }
    console.log(result);
};



findDisappearedNumbers([4,3,2,7,8,2,3,1])
findDisappearedNumbers([1,1])