// Problem Description
// An interval is a range, with a starting value and ending value. [1, 3] indicates elements 1, 2, 3 and so on.

// Given a collection of intervals, merge all overlapping intervals. The result should only have mutually exclusive intervals - meaning that no number should be common between two intervals, in the result.

// Note: The merged intervals should be printed in increasing order of start value.

// Input format
// There are N+1 lines of input.

// First line contains N, the number of intervals

// Next N lines contain 2 space separated integers A and B, which represent the start and end of an interval

// Output format
// For the X merged intervals, print each interval (the start and end being space separated) on a separate line

// Constraints
// 1 <= N <= 50000

// 0 <= A, B <= 1e9

// B >= A

// Sample Input 1
// 4

// 1 3

// 2 6

// 8 10

// 15 18

// Sample Output 1
// 1 6

// 8 10

// 15 18
function mergeInterval(arr)
{
    let result = [];
    let startA=arr[0][0];
    let endA=arr[0][1];
    for(let i=1;i<arr.length;i++)
        {
            let startB=arr[i][0],endB=arr[i][1];
            if(startB>endA)
                {
                    result.push([startA,startB])
                    startA=startB;
                    endA=endB;
                }
                else{
                    endA=Math.max(endA,endB)
                }
        }
        result.push([startA,endA])
        return result;
}
console.log(mergeInterval([[1,3],[2,6],[8,10],[15,18]])) //[[1,6],[8,10],[15,18]] 