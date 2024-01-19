import express, { Router } from "express"
const app = express()
import dotenv from "dotenv";
dotenv.config()
import connectDb from "./dbConnection/db.js";
import router from "./router/route.js";



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",router)

const MONGO_URL = process.env.MONGODB
app.use(express.urlencoded({extended:true}));
connectDb(MONGO_URL)




const port = process.env.PORT;
 app.listen(port,()=>{
    console.log(`server is running on ${port}`)
 }) 
