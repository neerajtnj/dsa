function partitionIndex(arr)
{
    let prefixSum=new Array(arr.length);
    for(let i=0;i<arr.length;i++)
        {
            if(i==0)
                {
                    prefixSum[i]=arr[i];
                }
                else{
                    prefixSum[i] = prefixSum[i-1] + arr[i];
                }
        }
        let suffixSum=new Array(arr.length);
        for(let i=arr.length;i>=0;i--)
            {
                if(i==arr.length-1)
                    {
                        suffixSum[i]=arr[i];
                    }
                    else{
                        suffixSum[i] =suffixSum[i+1]+arr[i]
                    }
            }
           for(let i=0;i<arr.length;i++)
           {
               if(prefixSum[i]==suffixSum[i])
               {
                   return i;
               }
           } 
}
console.log(partitionIndex([1,2,3,4,0,6])); //3