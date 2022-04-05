import { signInWithGooglepopup ,CreateUserDocumentfromauth,signInWithGoogleredirect} from "../../utility/firebase/firebase.component";
const Signin= ()=>{
    const googlepopup=async()=>{
        const {user} =await signInWithGooglepopup();
        CreateUserDocumentfromauth(user);
    }
    const googleredirect=async()=>{
        const {user} =await signInWithGoogleredirect();
        console.log(user)
        // CreateUserDocumentfromauth(user);
    }

    return(
        <>
        <div>
            Sign in page 
        </div>
        <button onClick={googlepopup}>sign in to google </button>
        <button onClick={googleredirect}>sign in to google </button>
        </>
    );
}
export default Signin;