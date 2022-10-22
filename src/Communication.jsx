import React, { useEffect, useState } from "react";
import "./Communication.css";
const Communication = (props) => {
  const [result, setResult] = useState([]);
  const [name, setName] = useState([]);
  const [img, setImg] = useState([]);
  const [spinner, setSpinner] = useState("");

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


  useEffect(() => {
    const fetchApi = async () => {
      props.setProgress(30);
      setSpinner(true);
      const url = `https://www.superheroapi.com/api.php/771712793908121/search/${props.name}`;
      const response = await fetch(url);
      const resJson = await response.json();
      props.setProgress(60);
      // console.log(resJson.results);
      setResult(resJson.results[0].connections);
      setName(resJson.results[0]);
      setImg(resJson.results[0].image);
      setSpinner(false);
      props.setProgress(100);
    };
    fetchApi();
  }, []);

  useEffect(()=>{
    document.title  = `${capitalizeFirstLetter(
      props.pov
    )} - SuperHero`
  }, []);

  return (
    <>
      {spinner ? (
        <div className="ho">
          <h1>LOADING...</h1>
        </div>
      ) : (
        <div className="communication">

        <>
          <div className="comm" key={name.id}>
            <div className="img">
              <img src={img.url} alt="" />
              <h1>{name.name}-<span>{props.pov}</span> </h1>
            </div>
            <div className="unication">
              <h2>GROUP--AFFILIATIONS</h2>
              <p>Batman Family, Justice League Unlimited</p>
              <h2>Relatives</h2>
              <p>
                Bruce Wayne (biological father), Warren McGinnis (father,
                deceased), Mary McGinnis (mother), Matt McGinnis (brother
              </p>
            </div>
          </div>
        </>
        </div>
      )}
      </>
  );
};

export default Communication;
