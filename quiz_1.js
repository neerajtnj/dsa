function maxSumSubarray(nums, k) {
    let maxSum = 0;
    let currentSum = nums.slice(0, k).reduce((acc, num) => acc + num, 0);
    maxSum = currentSum;

    for (let i = k; i < nums.length; i++) {
        currentSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

let nums = [2, 3, 5, 1, 6, 4];
let k = 3;
console.log(maxSumSubarray(nums, k));