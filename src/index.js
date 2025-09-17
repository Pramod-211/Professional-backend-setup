import connectDB from "./db/index.js";
import { configDotenv } from "dotenv";

console.log('just started with mongodb')
console.log('checking github')
configDotenv()

connectDB()