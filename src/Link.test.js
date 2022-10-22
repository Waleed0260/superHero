import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import Links from "./Links";


it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Links></Links>, div)
})

