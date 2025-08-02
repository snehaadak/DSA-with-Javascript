// https://leetcode.com/problems/missing-number/


var missingNumber = function(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            console.log(i);
            return(i);
        }
        
    }
    console.log(nums.length);
    return nums.length;
};



missingNumber([9,6,4,2,3,5,7,0,1])
missingNumber([0,1])