function secondLargest(arr)
{
    let firstLargest=arr[0];
    let secondLargest= arr[0];
    for(let i=1;i<arr.length;i++)
        {
            if(arr[i]>firstLargest)
                {
                    secondLargest=firstLargest;
                    firstLargest=arr[i];
                }
        }
        return secondLargest
}
console.log(secondLargest([4,6,7,3,2])); //9