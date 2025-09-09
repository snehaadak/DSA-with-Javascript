// https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currentSum = 0;

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
        else if (currentSum < 0) {
            currentSum = 0;
        }
    }

    console.log(maxSum);
};



maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
maxSubArray([1])
maxSubArray([5,4,-1,7,8])