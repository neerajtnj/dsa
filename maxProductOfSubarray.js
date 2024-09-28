function maxProductSubArray(arr)
{
    let maxSoFar= Number.NEGATIVE_INFINITY;
    let maxEndingHere = 1;
    for(let i=0;i<arr.length;i++)
    {
        maxEndingHere*=arr[i];
        if(maxSoFar<maxEndingHere)
        {
            maxSoFar = maxEndingHere;
        }
        if(maxEndingHere <0)
        {
            maxEndingHere = 0;
        }
    }
    return maxSoFar;
}
console.log(maxProductSubArray([2,3,-2,4])); // 6  