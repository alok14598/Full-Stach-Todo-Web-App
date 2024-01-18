import  express  from "express";
import getallUsers from "../Controller/getallUsers.js";

const Router=express.Router();

Router.get("/getUser", getallUsers);


export default Router;