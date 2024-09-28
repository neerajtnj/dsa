function quickSort(arr,left,right){
    if(left>=right)
        {
            return
        }
    let pi= partitonIndex(arr,left,right)  
    quickSort(arr,left,pi-1)
    quickSort(arr,pi+1,right)
}
function partitonIndex(arr,left,right)
{
    let pivotal=arr[right];
    let i=left-1
    for(let j=left;j<right;j++)
        {
               
        }
}