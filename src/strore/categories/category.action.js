import { createAction } from "../../utility/reducer/reducer.utils"
import { CATEGORIES_TYPES } from "./category.types"

export const setcategories = (categories) =>{
    return createAction(CATEGORIES_TYPES.SET_CATEGORIES,categories);
}