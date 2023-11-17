const Style=()=>{
    const pStyle={
        color:"darkblue",
        fontSize:"16px",
    };
    const dStyle={
        backgroundColor:"lightblue",
        color:"darkblue",
        padding:"10px",
        border:"2px solid blue",
        borderRadius:"5px",
    };
    return(
        <div style={dStyle}>
            <h1 style={{ color:'green'}}>Inline Style in JSX Example</h1>
            <p style={pStyle}>This is a paragraph with inline Styles applied</p>
        </div>
    );
};
export default Style;