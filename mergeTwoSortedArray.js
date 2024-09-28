function mergeTwoSortedArray(nums1,nums2)
{
    let ans=[];
    let idx1=0,idx2=0;
    while(idx1<nums1.length && idx2<nums2.length)
        {
            if(nums1[idx1]<nums2[idx2])
            {
                ans.push(nums1[idx1]);
                idx1++;
            }
            else{
                ans.push(nums2[idx2]);
                idx2++;
            }
        }
        while(idx1<nums1.length)
            {
                ans.push(nums1[idx1]);
                idx1++;
            }
        while(idx2<nums2.length)
            {
                ans.push(nums2[idx2]);
                idx2++;
            }   
        return ans; 
}
console.log(mergeTwoSortedArray([1,2,3,4],[2,5,6])); //[1,2,2,3,4,5,6]  