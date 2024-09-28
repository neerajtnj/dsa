function minWindowSubstring(s, t) {
    let tFreq = new Array(128).fill(0);
    for (let c of t) {
        tFreq[c.charCodeAt(0)]++;
    }

    let left = 0, right = 0, count = t.length;
    let minLength = Infinity, minStart = 0;

    while (right < s.length) {
        if (tFreq[s.charCodeAt(right++)]-- > 0) {
            count--;
        }

        while (count === 0) {
            if (right - left < minLength) {
                minLength = right - left;
                minStart = left;
            }

            if (tFreq[s.charCodeAt(left++)]++ === 0) {
                count++;
            }
        }
    }

    return minLength === Infinity ? "" : s.substr(minStart, minLength);
}

const s = "ADOBECODEBANC";
const t = "ABC";
console.log(minWindowSubstring(s, t)); 