import React, {useEffect, useState} from 'react'
import "./Appearence.css"
const Appearence = (props) => {
  const[result, setResult] = useState([]);
  const [name, setName] = useState([]);
  const [img, setImg] = useState([]);
  const[spinner, setSpinner] = useState("");

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


  useEffect(()=>{
    const fetchApi = async()=>{
      setSpinner(true);
      props.setProgress(30);
      const url = `https://www.superheroapi.com/api.php/771712793908121/search/${props.name}`;
      const response = await fetch(url);
      const resJson = await response.json();
      props.setProgress(60);
      // console.log(resJson.results);
      setResult(resJson.results[0].appearance);
      setName(resJson.results[0]);
      setImg(resJson.results[0].image);
      setSpinner(false);
      props.setProgress(100);    }
    fetchApi();
  }, [])


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
    ): (
      <div className='appearence'>
      <div className="app" key={name.id}>
        <div className="img">
          <img src={img.url} alt="" />
          <h1>{name.name}-<span>{props.pov}</span> </h1>
        </div>
        <div className="rence">
          <p><span>Gender</span> <span>{result.gender}</span></p>
          <br />
          <p> <span>Race</span> <span>{result.race}</span></p>
          <br />
          <p> <span>Height</span> <span>{result.height}</span></p>
          <br />
          <p> <span>Weight</span> <span>{result.weight}</span></p>
          <br />
          <p> <span>Eye-Color</span> <span>Black</span></p>

        </div>
      </div>
</div>
    )}



    </>
  )
}

export default Appearence
