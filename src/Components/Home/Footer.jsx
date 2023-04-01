
import style from "./Footer.module.css"



const Footer = () => {
  return (

    <div>

<footer id={style.footer}>
<div>
    <h4>SERVICE & SECURITY</h4>
    <p><span>&#x2713;</span>  Fast delivery</p>
    <p>Delivery within 2 business days</p>

    <p>&#x2713;  Free returns within 30 days</p>
    <p>Convenient return service</p>

    
    <p>&#x2713;  Secure payment and data protection</p>
    <p>SSL encryption for secure transactions and personal data</p>
</div>
<div>
    <h4>MYSTYLEMYSHOP</h4>
    <p>About us</p>
    <p>Trust & services</p>
    <p>Sustainability</p>
    <p>Press</p>
    <p>Careers</p>
    <p>Investor Relations</p>
    <p>Affilates</p>
    <p>Tax-Free Shopping</p>
</div>


<div>
    <h4>CUSTOMER CARE</h4>
    <p>Contact us</p>
    <p>Shipping information</p>
    <p>Secure payment</p>
    <p>Exchanges</p>
    <p>Return</p>
    <p>After sale service</p>
    <p>Gift card</p>
</div>

<div>
<h4>GET TREND UPDATE,STYLE TIPS AND MORE</h4>
<input type="email" placeholder="your email address here" />
<button>SIGN UP</button>
<p>Wish list <span>&#x2661;</span></p>
<p>Receive personal notifications</p>
</div>
    </footer>

    <hr/>
    <div className={style.foot2}>
        <p>terms of use</p>
        <p>privacy policy</p>
        <p>imprint</p>
    </div>





    </div>


    )
}

export default Footer