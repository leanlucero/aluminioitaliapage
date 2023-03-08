import { createContext, useEffect, useState } from "react";

const LoginContext = createContext()

const LoginProvider = ({children}) => {

    const [user , setUser] = useState( () => sessionStorage.getItem('user'))
    
    // useEffect(()=>{
    //   setUser(localStorage.getItem('user') === 'admin')
    // },[])
    
    const handleAuth = (token) => {
        if (user) {
          sessionStorage.removeItem('user');
          setUser(null);
        } else {
          sessionStorage.setItem('user', token);
            setUser(token);
        }
      };

    const datos = {user, handleAuth}

    return(
        <LoginContext.Provider value={datos} >{children}</LoginContext.Provider>
    )
}

export {LoginProvider};
export default LoginContext ;