function sumOfDiagonals(mat) {
    let sum = 0;
    const n = mat.length;
    for (let i = 0; i < n; i++) {
        // Add primary diagonal
        sum += mat[i][i];
        // Add secondary diagonal
        sum += mat[i][n - 1 - i];
    }
    // If n is odd, subtract the middle element as it has been added twice
    if (n % 2 !== 0) {
        sum-= mat[Math.floor(n / 2)][Math.floor(n / 2)];
    }
    return sum;
}
console.log(sumOfDiagonals([[1,2,3],[4,5,6],[7,8,9]])) // 25 15,15,-5
console.log(sumOfDiagonals([[1,2,3,5],[4,5,6,5],[7,8,9,5],[2,3,4,5]])) // 25 15,15,-5