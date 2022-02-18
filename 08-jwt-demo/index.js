const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const SECRET_KEY = "MY_SUPER_SECRET_KEY";

app.use(express.json());

app.post("/user/login", (req, res) => {
    const { username, password } = req.body;
    if(username && password){
        const token = jwt.sign({username, password}, SECRET_KEY)
        return res.send({message : "LOGIN SUCCESS", token})
    }else{
        return res.send({err : "Bad Credentials"})
    }
})

const ensureToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    if(authHeader){
        const token = authHeader.split(" ")[1]
        req.token = token;
        next();
    }else{
        return res.send({err : "Need to attach Token with Auth Header" })
    }
}

app.get("/api/protected", ensureToken , (req, res) => {
    jwt.verify(req.token, SECRET_KEY, (err, decode) => {
        if(err){
            console.log(err);
            return res.send(err)
        }
        console.log(decode);
        return res.send({message : "SUCCESS"})
    })
})


app.listen(9092, () => console.log("Server started at PORT : 9092"))