import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config()

const app = express();
const port = process.env.PORT || 5001

app.get("/", (req,res) => {
    res.send("Hare krsna ")
})

app.listen(port, ()=>{
    connectDB()
    console.log(`Hare krsna,Server started at http://localhost:${port}`)
})
