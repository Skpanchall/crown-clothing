import { createContext, useReducer} from "react";
import { createAction } from "../utility/reducer/reducer.utils";
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

const INITIAL_STATE = {
    iscartopen : true,
    cartitems : [],
    cartcounter : 0 , 
    carttotal : 0
};

const ACTION_TYPES = {
    'SET_CART_ITEMS': 'SET_CART_ITEMS',
    'SET_IS_CART_OPEN' : 'SET_IS_CART_OPEN'
}
const cartReducer = (state,action)=>{
    const {type,payload} = action;
    switch(type){
        case ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            };
        case ACTION_TYPES.SET_IS_CART_OPEN :
            return {
                ...state,
                iscartopen  :payload 
            }
        default :
            throw new Error(`unhandled type in cart reducer ${type}`);

    }

}


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
    const [{iscartopen,cartitems ,cartcounter,carttotal},dispatch] = useReducer(cartReducer,INITIAL_STATE);
    // const [iscartopen , setiscartopen] = useState(false);
    const updatecartitemsReducer = (cartitems)=>{

        const newcartcount = cartitems.reduce((total,cartitem)=> total + cartitem.quantity ,0);
        const newcarttotal = cartitems.reduce((total,cartitem)=> total + cartitem.quantity * cartitem.price,0);
        dispatch(createAction
            (ACTION_TYPES.SET_CART_ITEMS,{
                cartitems:cartitems,
                cartcounter:newcartcount,
                carttotal :newcarttotal
            }
        ));
    
    }

    const additemtocart= (producttoadd) => {
        const newcartitems = addcartitem(cartitems,producttoadd);
        updatecartitemsReducer(newcartitems);
    }
    const removeitemtocart= (removecartitem) => {
        const newcartitems = removecartitems(cartitems,removecartitem);
        updatecartitemsReducer(newcartitems);
    }
    const clearitemfromcart= (clearcartitem) => {
        const newcartitems =clearcartitems(cartitems,clearcartitem);
        updatecartitemsReducer(newcartitems);

    }

    const setiscartopen = (boole) =>{
        dispatch(createAction(ACTION_TYPES.SET_IS_CART_OPEN,  boole));
    }
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
