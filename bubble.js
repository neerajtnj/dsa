function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];  // ES6 destructuring for swapping
            }
        }
    }
}

let arr = [4, 2, 1, 5, 3];
bubbleSort(arr);
console.log(...arr);