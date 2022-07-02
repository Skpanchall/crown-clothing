import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onauthstatechange ,CreateUserDocumentfromauth} from "./utility/firebase/firebase.component";

import Home from "./routes/home/home.component";
import {Routes,Route} from 'react-router-dom';

import Navigationbar from "./routes/Navigation/navigation.component";
import Authantication from "./routes/Authantication/Authantication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { setcurrentuser } from "./strore/user/user.action";

const  App=()=> {
  
  const dispatch = useDispatch();
  useEffect(()=>{
    onauthstatechange((user)=>{
        if(user){
            CreateUserDocumentfromauth(user);
        }
        dispatch(setcurrentuser(user));
    });
},[]);



  return (
        <Routes>
            <Route path="/" element={<Navigationbar/>}>
                <Route index={true} element={<Home/>}/>
                <Route path="/shop/*" element={<Shop/>}/>
                <Route path="/auth" element={<Authantication/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
            </Route>
        </Routes>
  );
}

export default App;
