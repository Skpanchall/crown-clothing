// import { async } from "@firebase/util";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import 
{ signInWithGooglepopup ,
    CreateUserDocumentfromauth} from "../../utility/firebase/firebase.component";
import SignupForm from "../../Components/sign-up-form/Sign-up-form.component";
const Signin= ()=>{

    const googlepopup=async()=>{
        const {user} =await signInWithGooglepopup();
        CreateUserDocumentfromauth(user);
    }
    

    return(
        <>
        <div>
            Sign in page 
        </div>
        <button onClick={googlepopup}>sign in to google </button>
        <SignupForm/>
        </>
    );
}

export default Signin;