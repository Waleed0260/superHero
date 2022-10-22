import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import Appearence from "./Appearence";


it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Appearence></Appearence>, div)
})

