
import { Link } from "react-router-dom"
import "./Login.css";
import googleLogo from "../imageFile/google.png";
import facebookLogo from "../imageFile/facebook.png";
import singInLogo from "../imageFile/signin.png";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthenticationCon } from "../Context/AuthContext";
import {useReducer,useState,useEffect} from "react";







const Login = () => {


  const [email,setEmail]=useState("");
  const [password,setPass]=useState("");
const {isAuth,login,logout}=useContext(AuthenticationCon);


const Loginality=(e)=>{
e.preventDefault();



if(email&&password){
  let obj={
    email,password
  }
  checkLogin(obj)
}else{
  alert("Please fill all Details")
}


}

const checkLogin=(obj)=>{
  fetch("http://localhost:9090/users",{
      method:"GET",
  })
  .then((res)=>{
      return res.json();
  })
  .then((data)=>{
    let num=false;
      data.map((item)=>{
        if((item.email===email || item.phone==email)&& item.password===password ){
          num=true;
        }
      })
    
if(num){
  alert("Login Successfull");
  login(obj)
  setEmail("");
  setPass("");
}else{
  alert("Invalid Credentials");
  setEmail("");
  setPass("");
}

  })
}

if(isAuth){
 return <Navigate to="/furniture"/>
}








  return (<>

<div id="loginBody">
      <div id="loginCont">
         {/* =========================== firstLoginDiv 
         =========================== SignIn  */}
        <div id="firstLoginDiv">
          <div>
            <div id="message">
              <p>Incorrect Credentials</p>
            </div>
            <form id="loginForm" onSubmit={Loginality}>
              <h1>Sign In</h1>
              <input
                type="text"
                placeholder="Email or Phone Number"
                id="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <input type="password" placeholder="Password" id="password" 
                value={password}
                onChange={(e)=>setPass(e.target.value)}
              />
              <Link to="#">Forgot password?</Link>
              <input type="submit" id="submit" value="Sign In" />
              <p>
                Don't have account? <Link to="/register" id="signin"><span id="signUp"> Sign Up</span></Link>
              </p>
              <Link to="#"
                ><div id="facebook">
                  <img src={facebookLogo} alt="" id="facebookImg"/>
                  <p>Signin with Facebook</p>
                </div></Link>
                
              <Link to="#"><div id="google">
                  <img src={googleLogo} alt="" id="googleImg"/>
                  <p>Signin with Google</p>
                </div></Link>

            </form>
          </div>
        </div>

         {/* =========================== secondLoginDiv  */}

        <div id="secondLoginDiv">
          <div id="image">
            <img src={singInLogo} alt="image not found" />
          </div>
        </div>
      </div>
    </div>

  </>)
}

export default Login;