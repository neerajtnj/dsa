function smallestSubArraySum(arr)
{

    let minSoFar = Number.POSITIVE_INFINITY;
    let minEndingHere = 0;
   for(let i=0;i<arr.length;i++)
   {
        minEndingHere+=arr[i];
        if(minSoFar>minEndingHere)
        {
            minSoFar = minEndingHere;
        }
        if(minEndingHere >0)
        {
            minEndingHere = 0;
        }
   }
   return minSoFar;
}
console.log(smallestSubArraySum([3, -4, 2, -3, -1, 7, -5])); // -6