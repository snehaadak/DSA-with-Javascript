function secondLargest(arr) {
    arr.sort((a, b) => b - a);
    const setArr = [...new Set(arr)];    //we can also use Array.from(new Set(arr)) : this method converts any iterable object to an array
    setArr.length >=  2 ? console.log(setArr[1]) : console.log(-1)        
}

secondLargest([12, 35, 1, 10, 34, 1]);