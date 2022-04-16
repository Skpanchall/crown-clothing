import SignupForm from "../../Components/sign-up-form/Sign-up-form.component";
import SigninForm from "../../Components/sign-in-form/Sign-in-form.component";

import './Authantication.styles.scss'
const Authantication= ()=>{

    return(
        <>
        <div className="Authantication-container">
            <SigninForm/>
            <SignupForm/>
        </div>
        </>
    );
}

export default Authantication;