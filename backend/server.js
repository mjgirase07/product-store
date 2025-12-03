import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js"

dotenv.config()

const app = express();
const port = process.env.PORT || 5001

app.use(express.json()); // allows us to accept JSON data from request.body

app.use("/api/products", productRoutes );
app.use("/",(req, res)=>{
    res.send("hare krsna");
})

app.listen(port, ()=>{
    connectDB()
    console.log(`Hare krsna,Server started at http://localhost:${port}`)
})
