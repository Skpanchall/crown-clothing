import { createContext, useState } from "react";

import PRODUCT from '../shop-data.json';

export const Productcontext = createContext({
    product : []
})

export const ProductProvider = ({children})=>{
    const [product , setProduct] = useState(PRODUCT);
    const value = {product};

    return <Productcontext.Provider value={value}>{children}</Productcontext.Provider>
}