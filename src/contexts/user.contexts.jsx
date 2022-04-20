import { createContext, useState } from "react";

export const Usercontext = createContext({
    currentUser : null ,
    setcurrentuser : ()=> null
});

export const Userprovider = ({children})=>{
    const [currentUser, setcurrentuser] = useState(null);
    const value = {currentUser, setcurrentuser};

    return <Usercontext.Provider value={value}>{children}</Usercontext.Provider>

}
