function maxdiff(arr)
{
    let res= arr[1]-arr[0];
    let minValue=arr[0]
    for(let i=1;i<arr.length;i++)
        {
            res=Math.max(res,arr[i]-minValue);
            minValue=Math.min(minValue,arr[i]);
        }
    return res; 
}
console.log(maxdiff([2,3,10,6,4,8,1])); //8 