const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(__dirname+"/public"));


const users = [
  {
    id: "10001",
    email: "foo@test.com",
    age: 32,
  },
  {
    id: "10002",
    email: "bar@test.com",
    age: 34,
  },
  {
    id: "10003",
    email: "baz@test.com",
    age: 36,
  },
];

app.patch("/api/users/:userId", (req, res)=>{
    const { userId } = req.params;
    const position = users.findIndex(user => user.id === userId)
    if(position >= 0){
        const newUser = {...users[position], ...req.body}
        users[position] = newUser;
        return res.send(newUser);
    }else{
        return res.send({err : "Unable to find user to delete"})
    }
})

app.delete("/api/users/:userId", (req, res) => {
    const { userId } = req.params;
    const foundUser = users.find(user => user.id === userId)
    if(foundUser){
        const position = users.findIndex(user => user.id === userId)
        const deletedUser = users.splice(position, 1)
        return res.send(deletedUser)
    }else{
        return res.send({err : "Unable to find user to delete"})
    }
})

// http://localhost:9091/api/users - POST - create new user - request body
app.post("/api/users", (req, res)=>{
    const { email, age } = req.body;
    const newUser = {
        email, age, id : Date.now().toString()
    }
    users.push(newUser)
    return res.send(newUser);
})

// http://localhost:9091/api/users/10003 - GET - Single User
app.get("/api/users/:userId", (req, res) => {
    const { userId } = req.params;
    const foundUser = users.find(user => user.id === userId)
    if(foundUser){
        return res.send(foundUser)
    }else{
        return res.send({err : "User not found"})
    }
})

// http://localhost:9091/api/users - GET - all users
app.get("/api/users", (req, res)=>{
    res.send(users);
})

app.post("/api/login", (req, res) => {
    console.log(req.body);
    res.send({message : "LOGIN SUCCESSFULLY"})
})

app.get("/api/login", (req, res) => {
    console.log(req.query);
    res.send({message : "SUCCESS"})
})

// http://localhost:9091
app.get("/", (request, response) => {
//   response.send({ message: "SUCCESS" });
  response.sendFile(__dirname + "/public/index.html")
});

app.listen(9091, () => {
  console.log("Express started at PORT : 9091");
});
