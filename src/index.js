const express= require("express");
require("./db/mongoose");
const Animal = require("./model/animal");
const Donate = require("./model/donate");
const Adopt = require ("./model/adopt")
const cors =require ("cors");

const app = express();
const port = process.env.PORT ||8080;

app.use(express.json());
app.use(cors());

app.post("/animal", (req, res)=>{
    const animal = new Animal(req.body);

    animal
    .save()
    .then(() => {
        res.send(animal)
    })
    .catch((error) => {
        res.status(400).send(error)
    })
})
app.post("/donate", (req, res)=>{
    const donate = new Donate(req.body);

    donate
    .save()
    .then(() => {
        res.send(donate)
    })
    .catch((error) => {
        res.status(400).send(error)
    })
})
app.post("/adopt", (req,res) =>{
    const adopt = new Adopt (req.body);

    adopt
    .save()
    .then(() => {
        res.send(adopt)
    })
    .catch((error)=>{
        res.status(400).send (error)
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
});