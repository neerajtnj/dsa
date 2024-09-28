function findIndexOfTarget(arr,target)
{
    let brr=[];
    for(let i=0;i<arr.length;i++)
        {
            brr.push([arr[i], i]);
        }
        //lets sort the array based on first element
        brr.sort((a,b)=>a[0]-b[0]);
        let left=0;
        let right=brr.length-1;
        while(left<right)
            {
                let sum = brr[left][0]+brr[right][0];
                if(sum === target)
                    {
                        return [brr[left][1],brr[right][1]];
                    }
                    else if(sum < target)
                        {
                            left++
                        }
                    else{
                        right--
                    }
            }
            return [-1,-1];
}
console.log(findIndexOfTarget([2,7,11,15],9)); //[0,1]