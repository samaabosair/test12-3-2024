const _ = require("lodash");

const items = [1, [2, [3, ["sama", "magd"]]]];
const newIteam = _.flattenDeep(items);

console.log(newIteam);
const sama = "sama";
const element1 = (element) => element === sama;
console.log(i.findIndex(element1));
