import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

const Navbar = ( {type}) => {

    const {user,dispatch} = useContext(UserContext);

    const navigate=useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch({type:"LOGOUT"});
        navigate("/");
    }
  
return (
       
        <div className="navbar">
        <div className="container">
            <h1 className="heading"> ToDo List Record </h1>
 
        { user ? (<div className="user">
        <span className="username">Hi, {user.username}</span>
     {type=== "newPage" || <> <Link to="/newPost" >

        <button className="buttons">New Post</button>
        </Link>
        </>}
        <button className="buttons" onClick={handleClick}>Log Out</button>
        </div>) : (<div className="user">
        <Link to="/">
            <button className="buttons">LogIn</button></Link>
           <Link to="/SignUp">
            <button className="buttons">SignUp</button></Link>
        </div>)}

        </div>
        </div>
    )


}

export default Navbar;