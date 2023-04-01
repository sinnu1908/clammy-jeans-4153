
import style from "./DiscoverNew.module.css"


const DiscoverNew = () => {
  return (
    <div >
      <div className={style.heading}>
      <h2>
      Discover Our Newest Arrivals
      </h2>
      </div>

      <div className={style.pDiv}>

<div className={style.cDiv}>
<img src="https://ii1.pepperfry.com/assets/baf4b9f4-c37d-4d90-accc-91ce010e4449.jpg"/>
<h4>Living Room Trunks</h4>
<p>Starting ₹14999</p>
</div>


<div className={style.cDiv}>
<img src="https://ii1.pepperfry.com/assets/4d392e91-9b41-42a4-916f-e2222ec46b4b.jpg"/>
<h4>House Keeping</h4>
<p>Starting ₹269</p>
</div>


<div className={style.cDiv}>
<img src="https://ii2.pepperfry.com/assets/7b4e2e4e-4a03-4d25-be78-559b8569cc13.jpg"/>
<h4>Sadora Baby- Kids Furniture</h4>
<p>Starting ₹12000</p>
</div>


<div className={style.cDiv}>
<img src="https://ii2.pepperfry.com/assets/bfd02ab2-9e75-443f-bd0a-c98835b0ef48.jpg"/>
<h4>Bath Accessories</h4>
<p>Starting ₹319</p>
</div>












      </div>


    </div>
  )
}

export default DiscoverNew;