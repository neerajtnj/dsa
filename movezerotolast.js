function moveZeroToLast(arr)
{
    let count=0;
    for(let i=0;i<arr.length;i++)
        {
            if(arr[i]!=0)
                {
                    [arr[count],arr[i]]=[arr[i],arr[count]]
                    count++
                }
        }
        return arr
}
console.log(moveZeroToLast([0,1,0,3,12])) // [1, 3, 12, 0, 0]