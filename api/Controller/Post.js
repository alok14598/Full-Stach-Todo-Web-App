import Postt from "../Modal/Post.js";

import Users from "../Modal/User.js" ;




const Posts = async(req,res) => {
   
  const id = req.params.id;


    try {
        const userId=req.params.id;
       

        const feed= new Postt(req.body);
        await feed.save();
        await Users.findByIdAndUpdate(userId,{
            $push: {Post: feed._id}
        })
       
        res.status(200).json("Posted Successfully");
    }catch(err) {
        res.status(500).json("Post not successful")
    }
}

const getAllPosts =async(req,res) => {
    try {
        const posts = await Postt.find();
        res.status(200).json(posts);
}catch(err){
    res.status(500).json(err);


}}
 const getPosts =async (req,res) => {
    try{
        const id=req.params.id;
        const post= await Postt.findById(id);
        res.status(200).json(post);


    }catch{
        res.status(500).json("request not completed");
    }
 }

 const getAllPostsofUser = async(req,res) => {
    try{
        const id=req.params.id;
        const user=await Users.findById(id);
     
        const list= await Promise.all(
            user.Post.map((pos) => {
                return Postt.findById(pos);
            })
        )
        res.status(200).json(list);
    }
    catch(err){
        res.status(500).json("Request not completed");
    }
 }


export { Posts,getAllPosts,getPosts,getAllPostsofUser }