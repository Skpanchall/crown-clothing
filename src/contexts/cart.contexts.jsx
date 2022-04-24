import { createContext, useState , useEffect} from "react";

export const Cartcontext = createContext({
    iscartopen : false ,
    setiscartopen : ()=>{},
    cartitem : [],
    additemtocart : () => {},
    cartcounter : 0
})

const addcartitem = (cartitems, producttoadd) =>{
    const existingcartitem = cartitems.find((cartitem) => 
                            cartitem.id === producttoadd.id 
                            );

    if(existingcartitem){
        return cartitems.map((cartitem) => 
                cartitem.id === producttoadd.id 
                ? {...cartitem , quantity : cartitem.quantity + 1 }
                : cartitem
                );
    }

    return [ ...cartitems, {...producttoadd, quantity : 1}];
}

export const CartProvider = ({children})=>{
    const [iscartopen , setiscartopen] = useState(false);
    const [cartitems , setcartitems] = useState([]);
    const [cartcounter,setcartcounter]= useState(0);

    const additemtocart= (producttoadd) => {
        
        setcartitems(addcartitem(cartitems,producttoadd))
    }

    useEffect(()=>{
        const newcartcount = cartitems.reduce((total,cartitem)=> total + cartitem.quantity ,0);
        setcartcounter(newcartcount);
    },[cartitems])
    const value = {iscartopen, setiscartopen, additemtocart , cartitems, cartcounter};

    return <Cartcontext.Provider value={value}>{children}</Cartcontext.Provider>
}