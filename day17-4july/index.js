import express from "express";
import {connectDb} from "./database/connection.js";
import dotenv from "dotenv";

const app = express();
const PORT = 3000;
dotenv.config()
app.use(express.json());
//app.use(express.static(path.join(process.cwd(), 'public')));

app.get('/user', (req, res) => {
    console.log("Hello World!");
    res.send("Hello World!");
});

app.listen(PORT,  () => {
    connectDb();
    console.log(`http://localhost:${PORT}`);
});