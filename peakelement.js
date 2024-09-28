function peakNeighbourElement(arr)
{
    for(let i=1;i<arr.length-1;i++)
        {
            if(arr[i] > arr[i-1] && arr[i] < arr[i+1])
                return arr[arr.length-1];
            else 
                return arr[0];
        }
}

const result = peakNeighbourElement([1,2,3,4,5,6,7,8,9,10]);
console.log(result); // 10