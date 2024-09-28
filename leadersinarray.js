function leaders(arr)
{
    let currentLeader=arr[arr.length-1] 
    let result=[]
    result.push(currentLeader)

    for(let i=arr.length-2;i>=0;i--)
        {
            if(arr[i]>currentLeader)
                {
                    currentLeader=arr[i]
                    result.push(currentLeader)      
                }
        }

    return result;
}

console.log(leaders([16,17,4,3,5,2])) // [17, 5, 2]