const path = require('path');
const express = require('express');
const app = express();
require("dotenv").config();
const PORT = 3000;

app.use(express.json()); // axios sends the json data
app.use(express.urlencoded({ extended: true })); // post request by default 
app.use(express.static(path.join(__dirname, 'public'))); // public folder ko bhejega

// router
const todoRouter = require("./routes/todo.routes");
const connectToDB = require('./db/connection');
app.use("/",todoRouter);  //every request will go to todoRouter

app.listen(PORT, async() => {
    await connectToDB()
    console.log(`http://localhost:` + PORT);
});