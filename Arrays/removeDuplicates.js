// Remove Duplicates from Sorted Array : https://leetcode.com/problems/remove-duplicates-from-sorted-array/

var removeDuplicates = function(nums) {
    let sortedArr = [...new Set(nums)]
    console.log(sortedArr)
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4])


//

var removeDuplicates2 = function(nums) {
    let uniqueNumb;
    let newArr = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i] != uniqueNumb){
            uniqueNumb = nums[i];
            newArr.push(uniqueNumb)
        }
    }
    console.log(newArr)
};

removeDuplicates2([0,0,1,1,1,2,2,3,3,4])