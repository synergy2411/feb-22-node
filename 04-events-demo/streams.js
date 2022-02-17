const fs = require("fs");

const readStream = fs.createReadStream("./events.js")
const writeStream = fs.createWriteStream("./new-file.md")
const writeStreamTwo = fs.createWriteStream("./new-file-2.md")

// let buffer = Buffer.from("String to Buffer");
// console.log(buffer);

// readStream.on("data", (chunk) => {
//     console.log(chunk.toString());
//     while(chunk !== null){
//         writeStream.write(chunk);
//     }
// })

// request.pipe(writeStream);
// readStream.pipe(writeStreamTwo);

// readStream.pipe(response);

// request - READABLE | response - WRITABLE
