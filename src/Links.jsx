import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Appearence from "./Appearence";
import Biography from "./Biography";
import Communication from "./Communication";
import "./Link.css";
import Powerstat from "./Powerstat";

import LoadingBar from 'react-top-loading-bar'



const Links = () => {
  const [name, setName] = useState("batman");
  const[value, setValue] = useState("");
  const[progress, setProgress] = useState(0);



  const handleChange = (event)=>{
    setValue(event.target.value)
  }
  const handleSubmit = (event)=>{
    setName(value);
   // alert("Your request was approved " + value)
    event.preventDefault();
  }

  return (
    <Router>
      {/* <h1>Hello {name}</h1> */}
      <div>
        <form onSubmit={handleSubmit}>
        {/* <div className="form"> */}
        <input  type="text" value={value} placeholder="Search Character here" onChange={handleChange}/>
        <input type="submit" value="Search" />

        {/* <button type="submit" > Search</button> */}
        {/* </div> */}
        </form>


        <ul className="ul">
          <li>
            <Link to="/" className="link">
              Powerstats
            </Link>
            <Link to="/biography" className="link">
              Biography
            </Link>
            <Link to="/appearence" className="link">
              Appearences
            </Link>
            <Link to="/communication" className="link">
              Connections
            </Link>
          </li>
        </ul>
      </div>
      <LoadingBar
        height={3}
        color='white'
        progress={progress}
      />
      <Routes>
        <Route exact path="/" element={<Powerstat name={name} setProgress={setProgress} pov="Powerstats"/>}/>
        <Route path="/biography" element={<Biography name={name} setProgress={setProgress} pov="Biography"/>}/>
        <Route path="/appearence" element={<Appearence name={name} setProgress={setProgress} pov="Appearence"/>}/>
        <Route path="/communication" element={<Communication name={name} setProgress={setProgress} pov="Connections"/>}/>
      </Routes>
    </Router>
  );
};
export default Links;
