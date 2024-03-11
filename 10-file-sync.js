const { readFile, writeFile } = require("fs");
readFile("./contant/subFolder/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  writeFile(
    "./contant/subFolder/writeText2.txt",
    `here is the result smsm : ${first} `,
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
    }
  );
});
