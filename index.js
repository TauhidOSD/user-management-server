const express = require('express')
const app =express()
const cors = require('cors');
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const users = [
    { id : 1, name: 'tauhid', email: "tauhid@gmail.com"},
    { id : 2, name: 'Milon', email: "milon@gmail.com"},
    { id : 3, name: 'Shakib', email: "Shakib@gmail.com"},
]

app.get('/', (req, res) => {
    res.send('User manage Server is running')
})

app.get("/users", (req,res) =>{
    res.send(users);
})

app.post("/users",(req,res) => {
    console.log('Post Api heating')
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})
app.listen(port, ()=> {
    console.log(`Server is running on Port ${port}`)
})