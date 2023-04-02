


import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";
import {TbTruckDelivery,TbReplace } from "react-icons/tb";
import {MdSecurity} from "react-icons/md"
import "./SingleProdPage.css";
import Stars from "./Stars";


let url="http://localhost:9090/sofas"
const SingleProdPage = () => {

  const {id}=useParams();

const [mydata,setmydata]=useState({});

const getData=()=>{
  fetch(`${url}/${id}`)
  .then((res)=>{
    return res.json()
  })
  .then((data)=>{
    setmydata(data);
    console.log(data)
  })
  .catch((error)=>{
    console.log(error)
  })
}

useEffect(()=>{
getData()
},[])


const {image,name,brandName,totalPrice,discount,shippingDay}=mydata;




  return (
    <>
       <div className="container">

       <div className="grid-grid-two-column">

       {/* productImage */}
       <div className="product_images">
       <img src={image} alt={name}/>
       </div>
       
       {/* Product Data */}

       <div className="product-data">

       <h2>{name}</h2>

       {/* <p>{mydata?.rating?.overallRating}</p>
       <p>{mydata?.rating?.numberOfRating}</p> */}

       <Stars stars={mydata?.rating?.overallRating} reviews={mydata?.rating?.numberOfRating} />

       <p className="product-data-price">
        MRP : ₹{(totalPrice)}
       </p>

       <p className="product-data-price product-data-real-price">
        Discount Price : ₹{Math.floor((totalPrice)-(totalPrice*discount/100)).toLocaleString("en-US")}
       </p>

       <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,</p>

       <div className="product-data-warranty">

       <div className="product-warranty-data">
        <TbTruckDelivery className="warranty-icon" />
        <p>Free Delivery</p>
       </div>

       <div className="product-warranty-data">
        <TbReplace className="warranty-icon" />
        <p>30 Days Replacement</p>
       </div>

       <div className="product-warranty-data">
        <TbTruckDelivery className="warranty-icon" />
        <p>Express Delivery</p>
       </div>

       <div className="product-warranty-data">
        <MdSecurity className="warranty-icon" />
        <p>1 Year Warranty</p>
       </div>
       </div>




       </div>

       </div>

       </div>
    </>
  )
}

export default SingleProdPage


