import mongoose from 'mongoose';
import User from './userModel';

const searchSchema = new mongoose.Schema({
    search:{
        type:String,
        require:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User
    }
},{timestamps:true});

const Search = mongoose.model('Search',searchSchema)
export default Search;