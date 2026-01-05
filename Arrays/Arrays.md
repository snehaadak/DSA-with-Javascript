## Arrays

# `Declaring` an Array
    (1) let arr = new Array();

    (2) let arr =["apple","banana","cherry"];


# `Accesing` an Array

    arr[0] will revert the element at 0th index i.e apple
    arr[1] will revert the element at the 1st index i.e banana


---------------------------------------------------------------------------------------------
## ARRAY `METHODS`
----------------------------------------------------------------------------------------------

# To get the `no of elements`
    arr.length 



# To `Add` and `remove` the elements from the array : `push` & `pop`
    by default it does add and remove the element from the end of the array
    arr.push("orange")  => ["apple","banana","cherry","orange"]
    arr.pop()          => ["apple","banana","cherry"]



# To `Add` and `Remove` the elements at the start of the Array: `unshift` & `shift`
    arr.unshit("orange"); => ["orange","apple","banana","cherry"]
    arr.shift()            => ["apple","banana","cherry"]

    shift and unshift are not much performant when it comes to handling huge set of data



# `looping` over arrays: `for`, `do while`

    for (let i=0; i<arr.length; i++){
        return (arr[i])
    }
------------------------------------------
    let i=0
    while(i<arr.length)
    {
        return arr[i];
        i++
    }



# `Inbuilt Loops`: `map` & `filter`

    const numbers = [1, 2 , 3 , 4, 5];
    const newNums = numbers.map((item)=> {
        return item;
    });

    <!-- 1
         2
         3
         4
         5 -->
-------------------------------------------

    const newNums = numbers.filter((item) => {
        return item > 3;
    })

    <-- 4
        5 -->



# `Reduce`: this function takes in the array and reduce downs it to the one single value. In it we need to give in the accumulator (previous value) and current item. 

    iniitially reduce begins with the 0th index if we dont mention anything but if we mention in `(() => {},1)` this will begin from 1st index

    numbers = [1, 2 , 3 , 4, 5];
    const sum = numbers((prev,item) => {
        prev + item
    },0);

    <-- 15 -->



# `some`: It is similar to filter but instead of returning the whole new array or elements that satisfy the conditions it returns true even at single true occurance of the condition.
    numbers = [1, 2 , 3 , 4, 5];
    const res = numbers.some((item)=>{
        return item > 3;
    });

    <-- true -->



# `every`: For this it will check whether each and every element satisfies the condition and only then it will return true else even a single element doesn't satisfy the condition it returns false.
    numbers = [1, 2 , 3 , 4, 5];
    const res = numbers.every((item)=>{
        return item > 3;
    });

    <-- false -->



# `find`: this method returns us the very first element where it satisfies the condition. else returns us undefined.

    numbers = [1, 2 , 3 , 4, 5];
    const res = numbers.every((item)=>{
        return item > 3;
    });

    <-- 4 -->
-------------------------------------------
    const res = numbers.every((item)=>{
        return item > 6;
    });

    <-- undefined -->



# `findIndex`: this menthod returns us the index of very first occurance of the value and if that is not present it returns us with -1
    const nums = [1, 2, 3, 4, 5, 6, 7];
    const index = nums.findIndex(() => {item === 2} )
    console.log(index)                                      => 1



# `spread`Operator: we can merge the elements of two or more arrays into one. 
    const nums1 = [1, 2, 3];
    const nums2 = [4, 5, 6, 7];
    const withoutSpread = [nums1, nums2];       => [[1, 2, 3], [4, 5, 6, 7]]
    const withSpread = [...nums1, ...nums2]     => [1, 2, 3, 4, 5, 6, 7 ]



# `rest` Operator: It is similar to the spread but it is used for functions.
    function sum(...numbers){
        return numbers;
    }
    console.log(sum(nums1, nums2, 5, "hello"))     => [[1, 2, 3], [4, 5, 6, 7], 5, "hello"]



# `concat`: if we want to combine two or more arrays without modifying the exisiting array.
    const nums1 = [1, 2, 3];
    const nums2 = [4, 5, 6, 7];
    let arr =["apple","banana","cherry"];

    const newArr = nums1.concat(nums2)         => [1, 2, 3, 4, 5, 6, 7 ]
    const xyz = nums1.concat(nums2, arr)       => [1, 2, 3, 4, 5, 6, 7, "apple","banana","cherry" ]



# `slice`: if we have an array and we want to access the certain part of that array. it takes in the starting index and the end index. and it gives that certain part. It will include the first index but will exclude the last index number rather give us the result for end index - 1
    let arr =["apple","banana","cherry"];
    const newArr = arr.slice(0,2)              => ["apple","banana"]
    const newArr = arr.slice(-2)               => ["banana","cherry"]  this is the negative indexing part



# `splice`: this removes an elements from an array and if necessary inserts new elements in their place, returning deleted elements. It takes the three elements start position, number of elements to be deleted, this returns us the araay of deleted elements. we can also give in the 3rd arguments as the elements that we want to add in the array.
    let arr =["apple","banana","cherry"];
    console.log(arr.splice(1,2,"orange"));      =>["apple", "orange"]



# `fill`: it takes an array replaces the array elements with provided value. if we provide a single value it will replace every element with that value. if we give in (vaule, indexnumbner) so it will replace all the elements with the value starting from the given index number.
    const dummy = [2, 4, 6, 8, 9];
    dummy.fill(0);
    console.log(dummy)                      => [0, 0, 0, 0, 0]
    dummy.fill(0,2)                         => [2, 4, 0, 0, 0]



# `flat`: when we have the nested arrays. and if we want to convert those all set of nested arrays into a single array. It takes in upto what level we want to flatten the array. if we mention nothing bydefault it does upto 1 level as a depth
    const numbers = [1, [2, 3], [4, 5], 6];
    const flatEg = numbers.flat();          => [1, 2, 3, [4, 5], 6];
    const flatEg = numbers.flat(2);         => [1, 2, 3, 4, 5, 6];



# `reverse`: Method to reverse the array
    const numbers = [1, 2, 3, 4, 5, 6];
    numbers.reverese();
    console.log(numbers)                    => [6, 5, 4, 3, 2, 1]



# `sort`: to sort the array
    const unsorted = [5, 7, 8, 2, 6, 1, 3]
    unsorted.sort((a,b) => a - b)               => [1, 2, 3, 5, 6, 7, 8]
    unsorted.sort((a,b)=> b-a)                  => [8, 7, 6, 5, 3, 2, 1]


