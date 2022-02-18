const mongoose = require("mongoose");

const MONGO_URL = "mongodb://localhost:27017/honeywell-db"

mongoose.connect(MONGO_URL)
    .then(conn => {
        console.log("MongoDB Connected")
    }).catch(err=>console.log(err))