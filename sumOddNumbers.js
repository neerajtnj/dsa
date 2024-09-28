function recursiveReverse(str) {
    if (str === "") return "";
    return recursiveReverse(str.substr(1)) + str[0];
  }
  const result = recursiveReverse("world");
console.log(result); // 16