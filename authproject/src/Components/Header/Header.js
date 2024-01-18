import { Link, useNavigate } from "react-router-dom";
import "./header.css"
import { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import axios from "axios";

const LogInDialog = () => {

    const [credentials,setCredentials] = useState({
        username:undefined,
        password:undefined
    })
    const Navigate=useNavigate();

    const {user,dispatch,loading,error} =useContext(UserContext);

    const handleChange = (e) => {
        setCredentials((prev) => ({...prev,[e.target.id]:e.target.value}) )
    }

    const handleClick = async(e) => {
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try{
            const res= await axios.post("/auth/login",credentials);
            console.log(res);
            console.log(user);
            dispatch({type:"LOGIN_SUCCESS",payload:res.data});
            Navigate(`${res.data._id}/userpost`);
            
        }catch(err){
            dispatch({type:"LOGIN_FAILURE",payload: err.response.data});
        }
    }

    return  (
        <div className="containers">
    { !user  &&  <div className="dialogbox">
        <h1>Log In</h1>
        <div className="form">    
           <label>Username</label>
        <input type="text" id="username" onChange={handleChange}></input>
        <label>Password</label>
        <input type="text" id="password" onChange={handleChange}></input>
        </div>
 
        <button className="submitbutton" type="submit" onClick={handleClick} disabled={loading}>Submit</button>
        {error && <span style={{color:"red"}}>{error}</span>}
        <div className="signupoption">
        <span>Don't you have an account </span>
        <Link to="/SignUp">
                <button className="SignUpButton">SignUp</button>
       
                </Link>
  </div>
        </div>}
        </div>
    )
}

export default LogInDialog;