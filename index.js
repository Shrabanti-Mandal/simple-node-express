const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from my first ever node");
});

const users = [
  { id: 0, name: "lopa", email: "lopa@gmail.com", phone: "017888888" },
  { id: 1, name: "shabana", email: "shabana@gmail.com", phone: "017888888" },
  { id: 2, name: "dev", email: "dev@gmail.com", phone: "017888888" },
  { id: 3, name: "jeet", email: "jeet@gmail.com", phone: "017888888" },
  { id: 4, name: "koel", email: "koel@gmail.com", phone: "017888888" },
  { id: 5, name: "dipa", email: "dipa@gmail.com", phone: "017888888" },
  { id: 6, name: "runu", email: "runu@gmail.com", phone: "017888888" },
];

app.get("/users", (req, res) => {
  //console.log(req.query.search);
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

//app.METHOD
app.post('/users',(req,res)=>{
    const newUser=req.body;
    newUser.id=users.length;
    users.push(newUser);
    console.log('hitting the post',req.body);
    // res.send('inside post')
    // res.send(JSON.stringify(newUser)) or
    res.json(newUser)
})



//dynamic api
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
  // console.log(req.params.id);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "banana", "apple"]);
});

app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("yammy");
});

app.listen(port, () => {
  console.log("listening to port", port);
});
