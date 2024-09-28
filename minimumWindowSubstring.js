function minimumWindowSubstring(s, t) {
    let left = 0, right = 0;
     let ans = Infinity;
     let start = 0;
 
     let inputMap = new Map();
     for (let char of t) {
         inputMap.set(char, (inputMap.get(char) || 0) + 1);
     }
 
     let requiredChars = inputMap.size;
 
     while (right < s.length) {
         if (inputMap.has(s[right])) {
             inputMap.set(s[right], inputMap.get(s[right]) - 1);
             if (inputMap.get(s[right]) === 0) requiredChars--;
         }
 
         while (requiredChars === 0) {
             if (right - left + 1 < ans) {
                 ans = right - left + 1;
                 start = left;
             }
 
             if (inputMap.has(s[left])) {
                 inputMap.set(s[left], inputMap.get(s[left]) + 1);
                 if (inputMap.get(s[left]) > 0) requiredChars++;
             }
 
             left++;
         }
 
         right++;
     }
 
     return ans === Infinity ? "" : s.substring(start, start + ans);
 }
 