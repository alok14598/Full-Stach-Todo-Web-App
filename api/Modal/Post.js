import mongoose  from "mongoose";

const PostSchema= new mongoose.Schema({
    title : {
        type:String,
        required : true
    },
    thoughts: {
        type:String,
        required:true
    }
});

export default new mongoose.model("Post",PostSchema)
