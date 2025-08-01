// https://www.naukri.com/code360/problems/second-largest-element-in-the-array_873375


function secondLargest(arr) {
    arr.sort((a, b) => b - a);
    const setArr = [...new Set(arr)];    //we can also use Array.from(new Set(arr)) : this method converts any iterable object to an array
    setArr.length >=  2 ? console.log(setArr[1]) : console.log(-1)        
}

secondLargest([12, 35, 1, 10, 34, 1]);




function optimisedSecondLargest(arr){
    let first = Number.NEGATIVE_INFINITY;
    let second = Number.NEGATIVE_INFINITY;
    for(let i=0; i<arr.length;i++){
        if(arr[i]>first){
            second = first
            first = arr[i];
        }
        else if(arr[i]!=first && arr[i]>second){
            second = arr[i]
        }
    }
    console.log(second)
}

optimisedSecondLargest([12, 35, 1, 10, 34, 1]);