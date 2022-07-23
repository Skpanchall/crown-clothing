import { CATEGORIES_TYPES } from "./category.types";
const INITIAL_STATE  = {
    categories : []  ,
    isloading : false,
    error : null
};

export const categoryreducer = (state = INITIAL_STATE , {type ,payload } = {})=>{

    switch(type){
        case CATEGORIES_TYPES.FETCH_CATEGORIES_START : 
            return {...state ,isloading : true};
        case CATEGORIES_TYPES.FETCH_CATEGORIES_SUCCESS : 
            return {...state , categories : payload,isloading : false};
        case CATEGORIES_TYPES.FETCH_CATEGORIES_FAILURE : 
            return {...state , error : payload,isloading : false};
        // case CATEGORIES_TYPES.SET_CATEGORIES: 
        //     return {...state , categories : payload};
        default :
            return state;
    }
}
