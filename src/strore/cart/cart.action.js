import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utility/reducer/reducer.utils";


export const setCartisopen = (Boolean)=> createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,Boolean);

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

export const setcartitem = (payload)=> createAction(CART_ACTION_TYPES.SET_CART_ITEMS,payload);
export const additemtocart= (cartitems , producttoadd) => {
    const newcartitems = addcartitem(cartitems,producttoadd);
    return setcartitem(newcartitems);
}
export const removeitemtocart= (cartitems ,removecartitem) => {
    const newcartitems = removecartitems(cartitems,removecartitem);
    return setcartitem(newcartitems);
}
export const clearitemfromcart= (cartitems,clearcartitem) => {
    const newcartitems =clearcartitems(cartitems,clearcartitem);
    return setcartitem(newcartitems);

}
