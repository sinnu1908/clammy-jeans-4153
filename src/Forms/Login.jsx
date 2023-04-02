
import { Link } from "react-router-dom"
import "./Login.css";
import googleLogo from "../imageFile/google.png";
import facebookLogo from "../imageFile/facebook.png";
import singInLogo from "../imageFile/signin.png";
const Login = () => {
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
            <form id="loginForm">
              <h1>Sign In</h1>
              <input
                type="text"
                placeholder="Email or Phone Number"
                id="email"
              />
              <input type="password" placeholder="Password" id="password" />
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