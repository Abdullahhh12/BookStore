import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import { Book } from "./models/booksModel.js";
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app = express();

app.use(cors())

app.use(express.json());

app.use('/books',booksRoute);

app.get("/",(req,res)=>{
    return res.status(200).send("Welcome to Book Store");

})

dotenv.config()
const PORT = process.env.PORT || 3000;

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
.then(()=>{
    console.log("MongoDB connected");

    app.listen(PORT,()=>{
        console.log(`Server is running on ${PORT} PORT`);
    })  
})
.catch((error)=>{
    console.log(error);
    
})




