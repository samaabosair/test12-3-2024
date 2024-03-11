const path = require("path");
console.log(path.sep);
const filePath = path.join("/contant", "subFolder", "test.txt");
console.log(filePath);

const fileName = path.basename(filePath);
console.log(fileName);

const absolute = path.resolve(__dirname, "contant", "subfolder", "test.txt");
console.log(absolute);
