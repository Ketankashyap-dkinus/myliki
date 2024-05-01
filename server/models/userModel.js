import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema (
    {
        fname:{
            type:String,
            require:true
        },
        username:{
            type:String,
            require:true,
            unique:true,
            index:true
        },
        email:{
            type:String,
            lowercase:true,
            require:[true,'Please Enter Your Email'],
            match:[/\S+@\S+\.\S+/,'Please Correct E-mail Enter'],
            unique:true,
            index:true
        },
        phone:{
            type:Number,
            require:true,
            unique:true,
            index:true
        },
        gender:{
            type:String,
            enum:['male','female']
        },
        age:{
            type:string,
            require:true
        },
        avtar:{
            type:string
        },
        bio:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        }

    },{
        timestamps:true
    }
);

const User = mongoose.model('User',userSchema);
export default User;