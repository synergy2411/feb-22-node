// const path = require("path")

// const URL = "http://www.your-domain.com/public/index.html";

// console.log(path.basename(URL))
// console.log(path.dirname(URL))
// console.log(path.extname(URL))

// const os = require("os")
// console.log("Total Memory : ", os.totalmem());
// console.log("Free Memory : ", os.freemem());
// console.log("Arch : ", os.arch());
// console.log("Number of CPU's", os.cpus().length);


// const fs = require("fs");
// fs.readFile("./basics.js", (err, result)=>{
//     if(err){
//         console.error(err)
//         process.exit(1);
//     }
//     console.log(result.toString());
// })

// const result = fs.readFileSync("./basics.js")
// console.log(result);


const http = require("http");

const requestListener = (request, response) => {
    console.log("URL : ", request.url);
    console.log("METHOD : ", request.method);
    console.log("HEADERS : ", request.headers);
    response.write("Hello Client");
    response.end();
}

const server = http.createServer(requestListener)

server.listen(9091, () => {
    console.log("Server Started at PORT : 9091")
})


// http://localhost:9091