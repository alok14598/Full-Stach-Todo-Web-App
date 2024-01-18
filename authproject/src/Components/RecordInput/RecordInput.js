import axios from "axios";
import "./RecordInput.css";
import { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { Link, useNavigate } from "react-router-dom";

const RecordInput = () => {

    const {user} =useContext(UserContext);
    const Navigate=useNavigate();

    const [postcredit,setPostCredit] = useState({
        title : undefined,
        thoughts:undefined
    })

    const handleChange =(e) => {
        setPostCredit((prev) => ({...prev,[e.target.id]:e.target.value}));

    }

    const handleClick = async(e) => {
        e.preventDefault();
        await axios.post(`userpost/post/${user._id}`,postcredit);
       Navigate(`/${user._id}/userpost`);
    }

    return (
        <div className="RecordInput">
            <div className="RecordInputContainer">
                <div className="formInput">
                    <div className="labelform">
                    <label className="inputlabel" > Enter Title for your Post</label>
                    <input type="text" id="title" onChange={handleChange}></input>
                    </div>
                    <div className="labelform">
                    <label className="inputlabel"> Enter Thoughts of your Post</label>
                    <textarea  className="thoughtInput" id="thoughts" onChange={handleChange}></textarea>
                    </div>  <button className="submit" onClick={handleClick}>Submit</button>
                </div>

            </div>
        </div>
    )
}

export default RecordInput;