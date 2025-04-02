import mongoose from "mongoose"; 
import express,{json} from 'express';
import {route} from "./Routes/routes.js";
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app=express();

app.use(
    cors()
  );
  app.use(express.json());
  app.use('/',route)
mongoose.connect('mongodb://localhost:27017/Oncolabs');

const port =process.env.port;
app.listen(port,()=>{
    console.log(`server is listening to ${port}`)
})