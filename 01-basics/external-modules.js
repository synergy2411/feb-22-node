const chalk = require("chalk");
const yargs = require("yargs");

console.log(chalk.blue("Should come in blue color"));

// process

console.log(process.argv);          // []

console.log(yargs.argv);           // { }