import express from "express";
import {Register,Login} from "../Controller/Register.js"

const Router=express.Router();

Router.post("/register",Register);
Router.post("/login",Login);


export default Router;