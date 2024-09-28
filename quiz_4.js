function findPermutations(nums, ans, curr, s) {
    // Base case: if the current permutation length equals the input array length
    if (curr.length === nums.length) {
        ans.push(curr.slice()); // Add a copy of the current permutation to the answer
        return;
    }

    const n = nums.length;
    for (let i = 0; i < n; i++) {
        if (!s.has(i)) { // Check if the element at index i is not yet used in the current permutation
            curr.push(nums[i]); // Add the element to the current permutation
            s.add(i); // Mark the element as used
            findPermutations(nums, ans, curr, s); // Recurse with the updated current permutation and set
            curr.pop(); // Remove the last element to backtrack
            s.delete(i); // Unmark the element as used for backtracking
        }
    }
}

function permutation(nums) {
    let ans = []; // Initialize the array to hold all permutations
    let curr = []; // Initialize the current permutation
    let s = new Set(); // Initialize the set to track used elements
    findPermutations(nums, ans, curr, s); // Start the recursive function
    return ans; // Return all found permutations
}

// Example usage
const nums = [1, 2, 3];
console.log(permutation(nums));