// const { add, mul, getMyLuckyNumber : dailyLuck } = require("./maths")
// const { add, mul, getMyLuckyNumber : dailyLuck } = require("./utils");

const utils = require("./utils");

const {add, getLuckyNumber : dailyLuck} = utils();

console.log("Addition : ", add(2,5));

console.log("Your lucky number today : ", dailyLuck());