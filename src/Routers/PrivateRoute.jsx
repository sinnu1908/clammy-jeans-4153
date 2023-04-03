import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthenticationCon } from "../Context/AuthContext";

const PrivateRoutes = (props) => {

let {isAuth,setAuth}=useContext(AuthenticationCon);

if(!isAuth){
    return <Navigate to="/login"/>
}

  return (
   props.children
  )
}

export default PrivateRoutes