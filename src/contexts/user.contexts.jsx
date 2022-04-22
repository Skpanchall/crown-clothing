import { createContext, useState , useEffect} from "react";

import { onauthstatechange } from "../utility/firebase/firebase.component";
export const Usercontext = createContext({
    currentUser : null ,
    setcurrentuser : ()=> null
});

export const Userprovider = ({children})=>{
    const [currentUser, setcurrentuser] = useState(null);
    const value = {currentUser, setcurrentuser};

    useEffect(()=>{
        onauthstatechange((user)=>{
            setcurrentuser(user);
        });
    },[]);

    return <Usercontext.Provider value={value}>{children}</Usercontext.Provider>

}
