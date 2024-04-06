import React from "react";
import  ReactDOM  from "react-dom/client";


function Container(){
    return(
        <>
            <h1>Hello, Kalvium!</h1>
        </>
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Container/>)


