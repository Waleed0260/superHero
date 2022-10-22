import React, {useEffect, useState} from 'react'
import "./Biography.css"


const Biography = (props) => {
  const[result, setResult] = useState([])
  const[nom, setNom] = useState([]);
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
    //  console.log(resJson.results[0].biography[1]);
      setResult(resJson.results[0].biography);
      setNom(resJson.results[0]);
      setImg(resJson.results[0].image);
      setSpinner(false)
      props.setProgress(100);
    }
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
    <div className='biography'>
      <div className="bio" key={nom.id}>
        <div className="img">
          <img src={img.url} alt="" />
          <h1>{nom.name}-<span>{props.pov}</span> </h1>
        </div>
        <div className="graphy">
          <p><span>Full-Name:</span> <span></span>{nom.name}</p>
          <p><span>Alter-egos:</span> <span></span>No alter egos found</p>
          <p><span>Aliases:</span> <span></span> {result.aliases}</p>
          <p><span>Publisher:</span> <span>{result.publisher}</span></p>
          <p><span>Alignment:</span> <span>{result.alignment}</span></p>

        </div>
      </div>
    </div>
    )}
    </>
  )
}

export default Biography
