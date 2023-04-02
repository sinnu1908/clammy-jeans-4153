import { createContext,useState } from "react";

const AuthenticationCon=createContext();

const AuthContext = (props) => {

    const [isAuth,setAuth]=useState(false);

    const login=()=>{
      setAuth(true)
    }

    const logout=()=>{
      setAuth("")
    }
   
  return (
    <AuthenticationCon.Provider value={{isAuth,login,logout}}>
        {props.children}
    </AuthenticationCon.Provider>
  )
}

export default AuthContext;
export {AuthenticationCon};