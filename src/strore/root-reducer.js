import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { categoryreducer } from "./categories/category.reducer";
import { cartReducer } from "./cart/cart.reducer";
export const rootReducer = combineReducers({
    user : userReducer,
    category : categoryreducer,
    cart : cartReducer

});