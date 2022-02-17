const client = require("mongodb").MongoClient;

const mongoURL = "mongodb://localhost:27017"

let _db;

client.connect(mongoURL, (error, conn) => {
    if(error){
        console.log(error)
        process.exit(1);
    }
    console.log("Mongo Connected successfully...")
    _db = conn.db("honeywell-db")
    // getUsers();
    createUser()
})

const createUser = () =>{
    _db.collection("users").insertOne({"email" : "test123@test.com", "age" : 29}, (err, result) =>{
        if(err){
            console.log(err)
        }
        console.log(result);
    })
}


const getUsers = () => {
    _db.collection("users").find().toArray((err, docs)=>{
        if(err){
            console.log(err)
        }
        console.log(docs)
    })
}




// client.connect(mongoURL)
//     .then(conn => {
//         console.log("Mongo Connected...")
//     })
//     .catch(err=>{
//         console.log(err);
//         process.exit(1);
//     })