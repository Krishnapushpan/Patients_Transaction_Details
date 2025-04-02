import mongoose from "mongoose"; 
import express,{json} from 'express';
// import { route } from './Routes/routes.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app=express();

app.use(
    cors({ 
      origin: "http://localhost:3000",
    })
  );
app.use(json());
// app.use('/',route)
mongoose.connect('mongodb://localhost:27017/Oncolabs', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

const port =process.env.port;
app.listen(port,()=>{
    console.log(`server is listening to ${port}`)
})