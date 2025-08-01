
// https://leetcode.com/problems/rotate-array/


function rotate(nums, k) {
    for (let i=0;i<k; i++){
        let first = nums[nums.length - 1];
        let last = nums[-1];
        nums.unshift(first);
        nums.pop(last);
    }
    console.log(nums)
};

rotate([1,2,3,4,5,6,7],3)



// Below is the optimised code where we do k%n to Limit the number of 
// rotations to within the length of the array. 
// that is what if the length of array is 5 and also the number of rotations are also 5 that would give us modulus as 0 and wont  make sense to rotate

function rotateOptimised (nums,k){
    const n = nums.length;
    k = k % n
    for (let i=0;i<k; i++){
        nums.unshift(nums.pop())
    }
    console.log(nums)
};

rotateOptimised([1,2,3,4,5,6,7],3)


