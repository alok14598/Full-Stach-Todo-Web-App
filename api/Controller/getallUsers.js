import User from "../Modal/User.js"

const getallUsers = async (req,res) => {

    try{
        const users =await User.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json("request not completed");
    }

}

export default getallUsers;