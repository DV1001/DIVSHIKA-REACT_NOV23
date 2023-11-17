import {useState} from "react";
function Msg()
{
    const [msg,setMsg]=useState(false);
    const toggleMsg =()=>{
        setMsg(!msg);
    };
    return(
        <div>
            <h1>TOGGLE MESSAGE</h1>
            <hr></hr>
            <button onClick={toggleMsg}>
                {msg ? "Hide Message" : "Show Message"}
            </button>
                {msg && <p>Hi! How are you!!!</p>}
        </div>
    );
}
export default Msg;