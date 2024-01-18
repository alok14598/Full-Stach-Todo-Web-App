import Record from "../../Components/Record/Record"
import "./DataRecord.css"
import { useLocation } from "react-router-dom"
import useFetch from "../../Hooks/useFetch.js"

const DataRecord = () => {

 
  const location=useLocation();
  const id=location.pathname.split("/")[1];


  const {data,loading} = useFetch(`/userpost/getPosts/${id}`);
  

    return (
        <div className="DataRecord">  
        <div className="DataContainer">   
       { loading ? "loading"  : <>{ data.map((item) => (<Record  item= {item}/>))}  </> }     
        </div>
        </div>
 
    )
}
export default DataRecord