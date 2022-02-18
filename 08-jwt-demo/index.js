const express = require("express");
const jwt = require("jsonwebtoken");
const UserModel = require("./model/users-model");

require("./db");

const app = express();
const SECRET_KEY = "MY_SUPER_SECRET_KEY";

app.use(express.json());

app.post("/user/login", async (req, res) => {
    const { username, password } = req.body;
    try{
        const foundUser = await UserModel.findOne({username, password})
        
        if(foundUser){
            const token = jwt.sign({
                username : foundUser.username,
                id : foundUser._id 
            }, SECRET_KEY)
            return res.send({message : "LOGIN SUCCESS", token})
        }else{
            return res.send({err : "Bad Credentials"})
        }
    }catch(err){
        console.log(err);
        return res.send(err);
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

app.get("/api/protected", ensureToken ,  (req, res) => {
    jwt.verify(req.token, SECRET_KEY, async (err, decode) => {
        if(err){
            console.log(err);
            return res.send(err)
        }
        console.log(decode);
        const {id} = decode;
        try{
            const foundUser = await UserModel.findById(id)
            return res.send({
                message : "SUCCESS", 
                userIncome : foundUser.salary,
                isAdmin : foundUser.isAdmin
            })
        }catch(err){
            return res.send(err)
        }
    })
})


app.listen(9092, () => console.log("Server started at PORT : 9092"))