// import mongoose from 'mongoose';
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const app = express();
app.use(express.json());

const MongoDBConn = async()=>{
    const conn = await mongoose.connect(process.env.MongoDB_URL)
    if(conn){
        console.log('monogDB is connecting 💖')
    }
};
MongoDBConn();

//middleware


app.get('/api/v1/orders',async(req,res)=>{
    res.json({
        success: true,
        data:[],
        message:'successfully fetch orders'
    })
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`you server is running on ${PORT}`)
})
