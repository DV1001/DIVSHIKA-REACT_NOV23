import axios from "axios";
import React,{useState} from "react";
function AxiosDelete(){
    const[id,setId]=useState("");
    const handleId=(event)=>{
        setId(event.target.value);
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios
        .delete('http://localhost:3001/users/${id}')
        .then((res)=>{
            console.log(res.data);
            console.log(`Deleted ID: ${id}`);
        })
        .catch((error)=>{
            console.log("Error: "+error);
        });
    };
    return (
    <div>
        AxiosDelete
        <form onSubmit={handleSubmit}>
            <input type="text" value={id} onChange={handleId}></input>
            <button type="submit">Submit</button>
        </form>
        </div>
    );
}
export default AxiosDelete;