// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/


var maxProfit = function(prices) {
    let buy = 1;
    let sell = 1;
    if (prices[prices.length-1] === buy) console.log(0);
    else {
        for(let i=0; i<prices.length; i++){
        if(prices[i]<=buy){
            buy = prices[i]
        }
    }
    let daysArr = prices.slice(buy)
    for(let j=0; j<daysArr.length;j++){
        if(daysArr[j]>sell){
            sell = daysArr[j]
        }
    }
    console.log (sell - buy)
    }
    
};

maxProfit([7,1,5,3,6,4])
maxProfit([7,6,4,3,1])