import { signInWithGooglepopup ,CreateUserDocumentfromauth} from "../../utility/firebase/firebase.component";
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
        </>
    );
}
export default Signin;