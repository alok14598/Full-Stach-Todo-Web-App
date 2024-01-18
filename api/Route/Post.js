import express from "express";
import  { Posts,getAllPosts,getPosts,getAllPostsofUser} from "../Controller/Post.js";
import { verifyUser } from "../utils/verifyToken.js";


const Router=express.Router();


Router.post("/post/:id",Posts);
Router.get("/getPosts",getAllPosts);
Router.get("/getPost/:id",getPosts);
Router.get("/getPosts/:id",verifyUser,getAllPostsofUser);

export default Router;