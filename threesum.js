function threeSum(nums) {
    let answer = [];
    nums.sort((a, b) => a - b); // Sort the array in ascending order

    for (let i = 0; i < nums.length - 2; i++) { // Update loop condition to avoid unnecessary iterations
        if (i > 0 && nums[i] == nums[i - 1]) continue; // Skip duplicates for i

        let target = -nums[i];
        let front = i + 1;
        let back = nums.length - 1;

        while (front < back) {
            let sum = nums[front] + nums[back];
            if (sum < target) {
                front++;
            } else if (sum > target) {
                back--;
            } else {
                let triplet = [nums[i], nums[front], nums[back]];
                answer.push(triplet);

                while (front < back && nums[front] == triplet[1]) front++; // Correctly skip duplicates for front
                while (front < back && nums[back] == triplet[2]) back--; // Correctly skip duplicates for back
            }
        }
    }

    return answer;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]