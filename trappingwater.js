function trappingwater(arr)
{
    let left=0,right=arr.length-1;
    let capacity=0;
    while(left<right)
        {
            let area= Math.min(arr[left],arr[right])*(right-left);
            capacity= Math.max(capacity,area);
            if(arr[left]<arr[right])
                {
                    left++;
                }
                else{
                    right--;
                }
        }
        return capacity;
}
console.log(trappingwater([1 ,8 ,6, 2 ,5 ,4 ,8 ,3, 7])); //49