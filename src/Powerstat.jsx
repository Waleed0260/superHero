import React, { useEffect, useState } from "react";
// import { json } from 'react-router-dom'
import "./Powerstat.css";
const Powerstat = (props) => {
  
  const [result, setResult] = useState([]);
  const [name, setName] = useState([]);
  const [img, setImg] = useState([]);
  const [spinner, setSpinner] = useState("");

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.superheroapi.com/api.php/771712793908121/search/batman/Batman"
  //   ).then((res) => res.json());
  //   setResult(data.results[0]);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };



  useEffect(() => {
    const fetchApi = async () => {
      setSpinner(true);
      props.setProgress(30)
      const url = `https://www.superheroapi.com/api.php/771712793908121/search/${props.name}`;
      const response = await fetch(url);
      const resJson = await response.json();
      props.setProgress(50);
      setResult(resJson.results[0].powerstats);
      setName(resJson.results[0]);
      setImg(resJson.results[0].image);
      setSpinner(false);
      props.setProgress(100)
      //  console.log(resJson.strength);
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
        <div className="power-stat">
          <>
            <div className="power" key={name.id}>
              <div className="img">
                <img src={img.url} alt="" />
                <h1>{name.name}-<span>{props.pov}</span></h1>
              </div>
              <div className="stats">
                <ul>
                  <li>
                    <span>Intelligance</span>
                    <span>{result.intelligence}</span>
                  </li>
                  <li>
                    <span>Speed</span>
                    <span>{result.speed}</span>
                  </li>
                  <li>
                    <span>Strength</span>
                    <span>{result.strength}</span>
                  </li>
                  <li>
                    <span>Durability</span>
                    <span>{result.durability}</span>
                  </li>
                  <li>
                    <span>Power</span>
                    <span>{result.power}</span>
                  </li>
                  <li>
                    <span>Combat</span>
                    <span>{result.combat}</span>
                  </li>
                </ul>
              </div>
            </div>
          </>
        </div>
      )}
      {/* <button data-testid="button">{label}</button> */}
    </>
  );
};

export default Powerstat;
