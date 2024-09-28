// Problem Description
// Given an array nums, you need to find the maximum sum of triplet (nums[i] + nums[j] + nums[k]) such that 0 <= i < j < k and nums[i] < nums[j] < nums[k]. If no such triplet exists print 0.

// Input format
// There are 2t+1 lines of input

// First line contains an integer t - No of test cases.

// First line of each test case contains an integer n - No of elements in the array.

// Second line of each test case contains N space separated integers - The array nums.

// Output format
// For each test case print the answer in a new line.

// Sample Input 1
// 3

// 7

// 3 7 4 2 5 7 5

// 4

// 5 2 4 5

// 3

// 3 2 1

// Sample Output 1
// 16

// 11

// 0

function tripletMaxSum(nums)
{
    let maxSum=0;
    let n = nums.length;
    for(let j=0;j<n;j++)
        {
            let ithN = ithNum(nums,j);
            let kthN = kthNum(nums,j);
            if(nums[j] +ithN+kthN>maxSum)
                {
                    maxSum=Math.max(maxSum,ithN+nums[j]+kthN);
                }
        }
        return maxSum;
}
function ithNum(nums,j)
{
    let ithAns=0;

    for(let i=0;i<j;i++)
        {
            if(nums[i]<nums[j])
            {
                ithAns= Math.max(ithAns,nums[i])
            }
  
        }
        return ithAns;
}
function kthNum(nums,j)
{
    let kthAns=0;
    for(let k=j+1;k<nums.length;k++)
        {
            if(nums[k]>nums[j])
            {
                kthAns=Math.max(kthAns,nums[k]);
            }
        }
        return kthAns;
}
console.log(tripletMaxSum([3,7,4,2,5,7,5])); //16