import User from "../Modal/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

 const Register = async(req,res) => {

        const hash=bcrypt.hashSync(req.body.password,10)

    try {

        const user= new User({
            "username":req.body.username,
            "email": req.body.email,
            "password":hash
        });
        await user.save();
        res.status(200).json(user);


    }
    catch(err){
        res.status(500).json(err);
    }


}

 const Login = async(req,res) => {
    try {
        const user= await User.findOne({username:req.body.username});
        if(!user){
            return res.status(400).json("Bad Request")
        }
        
         if(!(bcrypt.compareSync(req.body.password, user.password))) {
            return res.status(404).json("Wrong Password")
         }
           const token=jwt.sign({id:user._id},process.env.JWT);  

      res.cookie("access_token",token,{httpOnly:true}).status(200).json(user);


    }catch(err){
        res.status(500).json("User did not logged In");
    }
}
export  {Register,Login}