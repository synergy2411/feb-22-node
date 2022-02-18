const env =  require("dotenv").config()

console.log("ENV : ", process.env.environment);
module.exports = process.env.environment==="PRODUCTION" ? require("./prod") : require("./dev");