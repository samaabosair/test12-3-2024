const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./contant/subFolder/first.txt", "utf8");
const second = readFileSync("./contant/subFolder/first.txt", "utf8");
console.log(first, second);
writeFileSync(
  "./contant/subFolder/write1.txt",
  `this is the first file i write of it : ${first},${second}`,
  { flag: "a" }
);
