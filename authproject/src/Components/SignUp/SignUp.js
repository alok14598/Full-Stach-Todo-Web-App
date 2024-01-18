import { useContext, useState } from "react"
import "./SignUp.css"
import { UserContext } from "../../Context/UserContext"
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignUpDialog = () => {

    const {loading,error,dispatch} = useContext(UserContext);
    const Navigate=useNavigate();

    const [credentials,setCredentials] = useState({
        "username":undefined,
        "email":undefined,
        "password":undefined
    })
   
    const handleChange = (e) => {
            setCredentials((prev) => ({...prev,[e.target.id]:e.target.value}));
    }
    const handleClick = async(e) => {
        e.preventDefault();
        dispatch({type:"REGISTER_START"});
        try{
            const res= await axios.post("/auth/register",credentials);
            dispatch({type:"REGISTER_SUCCESS",payload:res.data});
            Navigate("/userpost");
        }catch(err){
            dispatch({type:"REGISTER_FAILURE",payload:err.response.data})
        }
    }
   
    return  (
         <div className="containers">
        <div className="dialogbox">
        <h1>Sign Up</h1>
        <div className="form">
        <label>Username</label>
        <input type="text" id="username" onChange={handleChange}></input>
        <label>Email</label>
        <input type="text" id="email" onChange={handleChange}></input>
        <label >Password</label>
        <input type="text" id="password" onChange={handleChange}></input>
        </div>
        {error && <span>{error}</span>}
        <button type="submit" onClick={handleClick} disabled={loading}>Submit</button>
        </div>
        </div>
    )
}

export default SignUpDialog;