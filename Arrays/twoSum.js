// https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.


var twoSum = function(nums, target) {
    let i = 0;
    for(let j=1;j<nums.length; j++){
        if(nums[i] + nums[j] == target){
            console.log([i,j])
        }
        else{
            i++
        }
    }
};

twoSum([3,2,4],6)
twoSum([2,7,11,15], 26)
twoSum([3,3], 6 )
