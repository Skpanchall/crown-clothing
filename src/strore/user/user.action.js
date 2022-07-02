import { createAction } from "../../utility/reducer/reducer.utils"
import { USER_ACTION_TYPES } from "./user.types";

export const setcurrentuser = (user)=>{
    return  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
}