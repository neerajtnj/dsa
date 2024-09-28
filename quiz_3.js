function findSubarraySum(nums, target) {
    let left = 0;
    let right = 0;
    let currentSum = 0;

    while (right < nums.length) {
        currentSum += nums[right];

        while (currentSum > target) {
            currentSum -= nums[left];
            left++;
        }

        if (currentSum === target) {
            return [left, right];
        }

        right++;
    }

    return [-1, -1];
}

const nums = [2, 4, 7, 11, 15];
const target = 18;
const indices = findSubarraySum(nums, target);
console.log(`Start index: ${indices[0]}`);
console.log(`End index: ${indices[1]}`);