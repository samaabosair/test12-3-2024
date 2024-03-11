const os = require("os");
const user = os.userInfo();
console.log(user);
console.log(`the time of system is ${os.uptime()} second`);

const currentos = {
  name: os.type(),
  relese: os.release(),
  totalmem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentos);
