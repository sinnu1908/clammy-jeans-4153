import styled from "./sofaProducts.module.css";



const SofaProducts = ({sofaData}) => {
    console.log(sofaData)
  return (
    <div id={styled.container}>
    
{sofaData.map((item)=>{
    const {image,name,brandName,totalPrice,discount,shippingDay}=item;
    const {overallRating,numberOfRating}=item.rating;
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
    
    <p className="save">You Save ₹{(discountAmt).toLocaleString("en-US")} <span className={styled.discount}>({discount}% off)</span></p>

    <p className={styled.shipping}>Express Shipping in <span>{shippingDay} Day</span></p>
</div>
})}

</div>


    
  )
}

export default SofaProducts
