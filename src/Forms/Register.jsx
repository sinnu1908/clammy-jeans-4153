
import {Link} from "react-router-dom";
import "./Register.css";
import signUpLogo from "../imageFile/signup.png";
import googleLogo from "../imageFile/google.png";
import facebookLogo from "../imageFile/facebook.png";
import {useReducer,useState,useEffect} from "react";

import { Navigate } from "react-router-dom";


const url="http://localhost:9090/users"

const reducer=(state,action)=>{

    switch(action.type){
        case "name":{
          return {...state,name:action.payload}
        }
        case "phone":{
          return {...state,phone:action.payload}
        }
        case "email":{
          return {...state,email:action.payload}
        }
        case "password":{
            return {...state,password:action.payload}
        }
        case "reset":{
            return {...initial}
        }
        default :{
          return {...initial}
        }
      }

}


const initial={
    name:"",
    phone:"",
    email:"",
    password:"",
}



const Register = () => {


const [state,dispatch]=useReducer(reducer,initial);
const [flag,setFlag]=useState(true);
const [data,setData]=useState([])
const {name,phone,email,password}=state;


const navigation=()=>{
    <Navigate to="/" />
}

const getUserData=async()=>{
const response=await fetch(url)
const data=await response.json()
  setData(data);
}

useEffect(()=>{
 getUserData();
},[])

const formSubmit=(e)=>{
e.preventDefault();

if(name&&phone&&email&&password){
  
   data.forEach((item)=>{
    if(item.phone==phone || item.email==email){
        setFlag(false);
    }
   }) 

if(flag){
postUser(state);
dispatch({type:"reset"});

}else{
    alert("Already Registered Please Sign In");
    dispatch({type:"reset"});
  
    
}
  


}else{
    alert("Please fill all the details")
}

}

const postUser=(obj)=>{
    fetch(url,{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
          "Content-type":"application/json",
        }
   })
   .then((res)=>{
    if(res.ok){
        alert("Registered Successfully Please Login");
         
    }
   })
   .then((error)=>{
    console.log(error)
   })
}

if(flag){
    <Navigate to="/login"/>
}

  return (<>

<div id="LoginBody">
      <div id="loginCont">
         {/* =========================== firstLoginDiv  */}
        <div id="firstLogin">
          <div id="image">
            <img src={signUpLogo} alt="image not found" />
          </div>
        </div>
        
        <div id="secondLogin">
          <div>
             <span id="message"></span> 

            <div id="message">
              <p>Incorrect Credentials</p>
            </div>

            <form id="userRegister" onSubmit={formSubmit}>

              <h1>Sign Up</h1>
              <input type="text" placeholder="Name" id="name" 
              value={name}
              onChange={(e)=>{dispatch({type:"name",payload:e.target.value})}}
              />


              <input type="number" placeholder="Phone Number" id="number" 
              value={phone}
              onChange={(e)=>{dispatch({type:"phone",payload:e.target.value})}}
              
              />
              <input type="email" placeholder="Email" id="email" 
              value={email}
              onChange={(e)=>{dispatch({type:"email",payload:e.target.value})}}
              />

              <input type="password" placeholder="Password" id="password" 
              value={password}
              onChange={(e)=>{dispatch({type:"password",payload:e.target.value})}}
              />


              <input type="submit" id="submit" value="Sign Up" />

              <p>Already have account?<Link to="/login" id="login">
             <span id="signIn"> Sign in</span></Link>
              </p>

              <p>Or</p>

              <Link to="#"><div id="facebook">
                  <img src={facebookLogo} alt="" id="facebookImg" />
                  <p>Signup with Facebook</p>
                </div></Link>

             <Link to="#">
                <div id="google">
                    <img src={googleLogo} alt="google Image" id="googleImg" />
                    <p>Sign Up with Google</p>
                </div>
             </Link>

            </form>
            
          </div>
        </div>
      </div>
    </div>






</>)
}

export default Register;