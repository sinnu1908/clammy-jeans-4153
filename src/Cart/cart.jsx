

import styled from "./cart.module.css";
import Stars from "../Components/Furniture/Stars"
import {useState} from "react"



const Cart = ({cartData}) => {
  const [myCartData,setmyCartData]=useState([])

  
setmyCartData([...myCartData,cartData])

  return (

    <div id={styled.container}>
    
{myCartData.map((item)=>{
    const {image,name,brandName,totalPrice,discount,shippingDay,id,rating}=item;
    
    let discountAmt=totalPrice-Math.floor((totalPrice)-(totalPrice*discount/100));
return <div key={item.id}>
    <img className={styled.image} src={image} alt={name} />
    <p className={styled.name}>{name}</p>
    <p className={styled.brandName}>{brandName}</p>
    <p className={styled.todaysDeal}>Today's Deal</p>

    <div id={styled.price}>
    <p className={styled.discountPrice}>₹ {Math.floor((totalPrice)-(totalPrice*discount/100)).toLocaleString("en-US")}</p>
    <p className={styled.symbolWithTotalPrice}>₹ {(totalPrice).toLocaleString("en-US")}</p>
    </div>
    
    <p className={styled.youSave}>You Save ₹{(discountAmt).toLocaleString("en-US")} <span className={styled.discount}>({discount}% off)</span></p>

    {/* Stars Rating */}

     <Stars stars={rating?.overallRating} reviews={rating?.numberOfRating}/>

<p className={styled.shipping}>Express Shipping in <span className={styled.day}>{shippingDay} Day</span></p>
</div>

})}

</div>
  )
}

export default Cart;