
import {useState,useEffect} from "react";
import SofaProducts from "./sofaProducts";

let url="http://localhost:9090/sofas";

const Furniture = () => {

const [data,setdata]=useState([]);


const getData=async ()=>{
  const response=await fetch(url);
  const data=await response.json();
  console.log(data)
  setdata(data)
}


useEffect(()=>{
  getData()
},[])

  return (
    <div>
<SofaProducts sofaData={data}/>
    </div>
  )
}

export default Furniture