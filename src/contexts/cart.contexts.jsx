import { createContext, useState } from "react";

export const Cartcontext = createContext({
    iscartopen : false ,
    setiscartopen : ()=>{}
})

export const CartProvider = ({children})=>{
    const [iscartopen , setiscartopen] = useState(false);
    const value = {iscartopen, setiscartopen};

    return <Cartcontext.Provider value={value}>{children}</Cartcontext.Provider>
}