import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
    iscartopen : true,
    cartitems : []
};
export const cartReducer = (state = INITIAL_STATE,action)=>{
    const {type,payload} = action;
    switch(type){
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartitems :payload
            };
        case CART_ACTION_TYPES.SET_IS_CART_OPEN :
            return {
                ...state,
                iscartopen  :payload 
            }
        default :
            return state;
    }

}