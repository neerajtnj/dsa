function removeDuplicate(arr)
{
    let res=1
    for(let i=1;i<arr.length;i++)
        {
            if(arr[i]!=arr[res-1])
                {
                    arr[res]=arr[i]
                    res++
                }
        }
        return res;
}
let arr=[2,2,2,3,4,4,5,5,6,6,6,7,8,8]
let len=removeDuplicate(arr)
console.log(arr.slice(0,len)) // [2, 3, 4, 5, 6, 7, 8]