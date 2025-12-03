import mongoose from "mongoose"
import { DB_NAME } from "./constants.js";

export const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDb Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}