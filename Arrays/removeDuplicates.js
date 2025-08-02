// Remove Duplicates from Sorted Array : https://leetcode.com/problems/remove-duplicates-from-sorted-array/

var removeDuplicates = function(nums) {
    for(let i=0; i<nums.length-1; i++){
        if(nums[i]=== nums[i+1]){
            nums.splice(i+1,1);
            i--;
        }
    }
   console.log(nums.length)
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4])


//

var removeDuplicates2 = function(nums) {
    if (nums.length === 0) return 0;
    i=0;
    for(let j=1;j<nums.length;j++){
        if(nums[i]!=nums[j]){
            i++
            nums[i] = nums[j]
        }
    }
    console.log(i + 1)
};

removeDuplicates2([0,0,1,1,1,2,2,3,3,4])