
import style from "./NavLinks.module.css";

import { NavLink } from "react-router-dom";


const mylinks=[
    {linking:"/furniture",text:"Furiniture"},
    {linking:"/mattresses",text:"Mattresses"},
    {linking:"/homeDecor",text:"Home Decor"},
    {linking:"/furnishing",text:"Furnishing"},
    {linking:"/kitchenAndDining",text:"Kitchen & Dining"}
]



const NavLinks = () => {
  return (<>
    
    <nav className={style.mainNav}>

{/* LOGO/HOME PAGE LINK */}

       <div className={style.logo}>
        <NavLink to="/">
        <h2> <span>M</span>ayers
             <span>W</span>ood 
        </h2>
        </NavLink>
       </div>

{/* MENU LINKS */}

       <div className={style.menuLinks}>
       <ul className={style.menuLinksUl}>
        {mylinks.map((item)=>{
            const {linking,text}=item;
            return <li key={linking}><NavLink to={linking}>{text}</NavLink></li>
        })}
       </ul>
       </div>

{/* OTHER LINKS */}

       <div className={style.otherLinks}>
            
       <ul className={style.otherLinksUl}>

            <li><NavLink to="/login"><img src="https://ii1.pepperfry.com/assets/w22-profile-icon.svg" alt="login"/></NavLink>
            </li>
          
            <li><NavLink to="/notification"><img src="https://ii1.pepperfry.com/assets/w22-pf-notification-icon.svg" alt="login"/></NavLink>
            </li>

            <li><NavLink to="/favourites"><img src="https://ii1.pepperfry.com/assets/w22-pf-wishlist-icon.svg" alt="login"/></NavLink>
            </li>

            <li><NavLink to="/cart"><img src="https://ii1.pepperfry.com/assets/w22-pf-cart-icon.svg" alt="login"/></NavLink>
            </li>

           </ul>

       </div>




    </nav>

    
    </>)
}

export default NavLinks