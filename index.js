//GET METHOD /GET ALL USERS

const express = require('express');
const app = express();

app.use(express.json());

//EMPTY ARRAY

let users =[
    {   
        "id": 1,
        "name" : "omprasad",
        "email" : "abc@gmail.com"
    }
];

app.get('/users', (req,res) =>{
    res.json(users);
});

//POST METHOD

app.post('/users', (req,res)=>{
    const newUser = {id: users.length +1, ...req.body};
    users.push(newUser);
    res.status(200).json(newUser);
});


//PUT METHOD   update users

app.put('/users/:id', (req,res)=>{
    const user = users.find(u => u.id === parseInt(req.params.id));

    if(!user) return res.status(401).json ({message : "user not found"})

        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        res.json(user);
});


//DELETE 
app.delete('/users/:id', (req,res) =>{
    users = users.filter(user => user.id !== parseInt(req.params.id));

    res.json({messsage : "user deleted"});
});

app.listen(8888, ()=> console.log("server is running "));