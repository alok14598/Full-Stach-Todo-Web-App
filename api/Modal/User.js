import mongoose from "mongoose";


const UserSchema= new mongoose.Schema({
    username: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true

    },
    password : {
        type: String,
        required:true
    },
    Post : {
        type :[String]
    }
})

export default new mongoose.model("User",UserSchema);