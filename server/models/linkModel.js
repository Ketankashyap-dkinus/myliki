import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    url:{
        type:String,
        require:true
    }
})