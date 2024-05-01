import mongoose from "mongoose";

const userProfileVisitSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        require:true
    },
    visitCount:{
        type:Number,
        default:0
    },
    lastVisitedAt:{
        type:Date,
        default:Date.now()
    }
});

const UserProfileVisit = mongoose.model('userProfileVisit',userProfileVisitSchema);
export default UserProfileVisit;