import { createContext ,useReducer, useEffect} from "react";

import { onauthstatechange ,CreateUserDocumentfromauth} from "../utility/firebase/firebase.component";
export const Usercontext = createContext({
    currentUser : null ,
    setcurrentuser : ()=> null
});

const INITIAL_STATE = {
    currentUser : null
};

export const USER_ACTION_TYPES = {
    "SET_CURRENT_USER":"SET_CURRENT_USER"
}
const userReducer = (state,action)=>{
    const {type,payload} = action;
    switch (type){
        case USER_ACTION_TYPES.SET_CURRENT_USER :
            return {
                ...state,
                currentUser : payload
            }
        default :
            throw new Error(`unhandled type ${type} in userreducer`);
    }
}

export const Userprovider = ({children})=>{
    const [{currentUser} , dispatch] = useReducer(userReducer,INITIAL_STATE);
    const setcurrentuser = (user)=>{
        dispatch({type:USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
    }
    console.log(currentUser);
    // const [currentUser, setcurrentuser] = useState(null);
    const value = {currentUser, setcurrentuser};

    useEffect(()=>{
        onauthstatechange((user)=>{
            if(user){
                CreateUserDocumentfromauth(user);
            }
            setcurrentuser(user);
        });
    },[]);

    return <Usercontext.Provider value={value}>{children}</Usercontext.Provider>

}
