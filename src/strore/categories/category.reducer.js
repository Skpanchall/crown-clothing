import { CATEGORIES_TYPES } from "./category.types";
const INITIAL_STATE  = {
    categories : []   
};

export const categoryreducer = (state = INITIAL_STATE , {type ,payload } = {})=>{

    switch(type){
        case CATEGORIES_TYPES.SET_CATEGORIES: 
            return {...state , categories : payload};
        default :
            return state;
    }
}
