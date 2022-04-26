import { createContext, useState , useEffect} from "react";
import { addcollectionanddocuments } from "../utility/firebase/firebase.component.jsx";
import {SHOP_DATA} from '../shop-data.js';

export const Productcontext = createContext({
    product : []
})


export const ProductProvider = ({children})=>{
    const [product , setProduct] = useState([]);
    // useEffect(()=>{
        
    //     addcollectionanddocuments("categories",SHOP_DATA);
    // },[]);

    const value = {product};

    return <Productcontext.Provider value={value}>{children}</Productcontext.Provider>
}