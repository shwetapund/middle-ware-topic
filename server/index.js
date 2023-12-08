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
const checkAPi = (req, res, next)=>{
    const {apiKey} = req.query;

    if(apiKey==='shweta'){
        return res.json({
            success:true,
            message:'API ke is valid'
        })
    }else{
        return res.status(401).json({
            success:false,
            message:'API key is invalid'
        })
    }
}
const validateParams = (req,res,next)=>{
    const {title, description, price} = req.body;

    if(!title){
        return res.json({
            success:true,
            message:'title is missing'
        })
    }
    if(!description){
        return res.json({
            success:true,
            message:'description is missing'
        })
    }
    if(!price){
        return res.json({
            success:true,
            message:'price is missing'
        })
    }
    next();
}

app.get('/api/v1/orders',checkAPi, (req,res)=>{
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
