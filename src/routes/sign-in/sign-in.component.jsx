import { signInWithGooglepopup } from "../../utility/firebase/firebase.component";
const Signin= ()=>{
    const googlepopup=async()=>{
        const popup =await signInWithGooglepopup();
        console.log(popup);
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