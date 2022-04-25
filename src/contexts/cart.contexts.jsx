import { createContext, useState , useEffect} from "react";

export const Cartcontext = createContext({
    iscartopen : false ,
    setiscartopen : ()=>{},
    cartitem : [],
    additemtocart : () => {},
    cartcounter : 0 , 
    removeitemtocart : () => {} , 
    clearitemfromcart : () => {} ,
    carttotal : 0
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

const removecartitems = (cartitems, cartitemtoremove) =>{
    const existingcartitem = cartitems.find((cartitem) => 
                            cartitem.id === cartitemtoremove.id 
                            );

    if(existingcartitem.quantity === 1){
        return cartitems.filter(
                    (cartitem)=> cartitem.id !== cartitemtoremove.id
                );
    }

    return cartitems.map((cartitem) => 
    cartitem.id === cartitemtoremove.id 
    ? {...cartitem , quantity : cartitem.quantity - 1 }
    : cartitem
    );
}

const clearcartitems = (cartitems,clearcartitem) =>{
    return cartitems.filter(
        (cartitem)=> cartitem.id !== clearcartitem.id
    );
}
export const CartProvider = ({children})=>{
    
    const [iscartopen , setiscartopen] = useState(false);
    const [cartitems , setcartitems] = useState([]);
    const [cartcounter,setcartcounter]= useState(0);
    const [carttotal,setcarttotal]= useState(0);

    const additemtocart= (producttoadd) => {
        setcartitems(addcartitem(cartitems,producttoadd))
    }
    const removeitemtocart= (removecartitem) => {
        setcartitems(removecartitems(cartitems,removecartitem))
    }
    const clearitemfromcart= (clearcartitem) => {
        setcartitems(clearcartitems(cartitems,clearcartitem))
    }
    useEffect(()=>{
        const newcartcount = cartitems.reduce((total,cartitem)=> total + cartitem.quantity ,0);
        setcartcounter(newcartcount);
    },[cartitems]);

    useEffect(()=>{
        const newcarttotal = cartitems.reduce((total,cartitem)=> total + cartitem.quantity * cartitem.price,0);
        setcarttotal(newcarttotal);
    },[cartitems]);
    
    const value = { 
        iscartopen, 
        setiscartopen, 
        additemtocart , 
        cartitems, 
        cartcounter, 
        removeitemtocart , 
        clearitemfromcart,
        carttotal
    };
        

    return <Cartcontext.Provider value={value}>{children}</Cartcontext.Provider>
}
