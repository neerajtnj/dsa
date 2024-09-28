function mergeSort(n, arr) {
    // Base case: 
    if (n <= 1) {
        return arr;
    }
    const middle = Math.floor(n / 2);
    const leftArr = arr.slice(0, middle);
    const rightArr = arr.slice(middle, n);
    const leftSorted = mergeSort(leftArr.length, leftArr);
    const rightSorted = mergeSort(rightArr.length, rightArr);

    // Merge the sorted halves and return
    return merge(leftSorted, rightSorted);
}

function merge(left, right) {
    let result = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage
let arr = [4, 2, 1, 5, 3];
arr = mergeSort(arr.length, arr);
console.log(arr); // Output: [1, 2, 3, 4, 5]