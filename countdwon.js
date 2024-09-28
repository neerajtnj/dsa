function sumOddNumbers(n) {
    if (n <= 0) return 0;
    if (n % 2 !== 0) {
      return n + sumOddNumbers(n - 2);
    }
    return sumOddNumbers(n - 1);
  }
  
  const result = sumOddNumbers(7);