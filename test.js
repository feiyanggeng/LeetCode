// function fn(...args) {
//   console.log(args);
// }

// fn(4)


// console.log(process.cwd());

//  1 - 26
const crypto = require("crypto");
function base64(data) {
  let str = Buffer.from(data);
  return str.toString("base64")
}
var str = "admin:config-c5f93105-7292-466b-9876-180462cfb6e5";

var auth = base64(str);

console.log(auth)