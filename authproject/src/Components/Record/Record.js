
import "./Record.css"

const Record =({item}) =>{

return (
    <div className="recordtext">
    <div className="Record">


        <div className="title">{item.title}</div>
        <div className="thoughts">
        <div  className="box">{item.thoughts}</div>
        </div>
    </div>
    </div>
)
}

export default Record;