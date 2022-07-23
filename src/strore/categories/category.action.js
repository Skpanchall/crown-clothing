import { async } from "@firebase/util";
import { getcategoriesanddocuments } from "../../utility/firebase/firebase.component";
import { createAction } from "../../utility/reducer/reducer.utils"
import { CATEGORIES_TYPES } from "./category.types"

export const setcategories = (categories) =>{
    return createAction(CATEGORIES_TYPES.SET_CATEGORIES,categories);
}

export const fetch_categories_start = () =>{
    return createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_START);
}

export const fetch_categories_success = (categories) =>{
    return createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_SUCCESS,categories);
}

export const fetch_categories_failuer = (error) =>{
    return createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_FAILURE,error);
}

export const categories_thunk = () => async(dispatch)=>{
    dispatch(fetch_categories_start());
    try{
        const categories = await getcategoriesanddocuments();
        dispatch(fetch_categories_success(categories));
    }catch(error){
        dispatch(fetch_categories_failuer(error));
    }
    

}