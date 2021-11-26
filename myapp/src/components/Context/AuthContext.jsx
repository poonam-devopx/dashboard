import React,{useState,useContext,useEffect} from 'react'
import { auth } from "../../firebase"
const Authcontext=React.createContext()
export function useAuth(){
    return useContext(Authcontext)
}
function AuthContext({children}) {
    const [currentUser, setCurrentUser]=useState();
    function signup(email, password){
        return auth.createUserWithEmailandPassword(email,password);
    }
    useEffect(()=>{
       const unsubscribe= auth.onAuthStateChanged(user=>
            setCurrentUser(user))
            return unsubscribe;

    },[])
    const value={
        currentUser
    }
    return (
       <Authcontext.Provider value={value}>


       </Authcontext.Provider>
    )
}

export default AuthContext

