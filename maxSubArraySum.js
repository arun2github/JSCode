let arr = [1,2,3,4]

function maxSubSum(arr){
    maxValue = arr[0]
    for(let i=0;i<arr.length;i++){
        currSum = 0;
        for(let j=0;j<arr.length;j++){
            currSum = arr[j] +currSum
            //console.log(currSum);
            maxValue = Math.max(currSum,maxValue);
        }
    }
    return maxValue
}

let x = maxSubSum(arr)
console.log(x);