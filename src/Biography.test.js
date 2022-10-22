import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import Biography from "./Biography";


it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Biography></Biography>, div)
})

