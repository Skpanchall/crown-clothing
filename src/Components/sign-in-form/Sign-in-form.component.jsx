import { useState } from "react";
import { CreateUserDocumentfromauth,signInWithGooglepopup,signinauthuserwithemailandpassword} from "../../utility/firebase/firebase.component";
import Forminput from "../form-input/Form-input.component";
import './Sign-in-form.style.scss';
import Button from "../button/Button.components";
const defaultparams = {
    email : '',
    password :''
};


const SigninForm= ()=>{
    const [formfields,setformfields] = useState(defaultparams);
    const { email, password }= formfields;

    const googlepopup=async()=>{
        await signInWithGooglepopup();
        
    }

    
    const resetfields =() =>{
        setformfields(defaultparams);
    }

    const submithandler = async(event)=>{
        event.preventDefault();
        
        try{
            const {user} = await signinauthuserwithemailandpassword(email,password);
            resetfields();
        }catch(error){
            console.log(error)
            switch (error.code){
                case 'auth/wrong-password':
                    alert("wrong password")
                    break;
                case 'auth/user-not-found':
                    alert("no user asociated with this email")
                    break;
                default:
                    console.log("alert")
            }
        }
        
    }
    const eventhandler =(event)=>{
        const {name, value}= event.target;
        setformfields({ ...formfields,[name] : value}); 
    }

    return(
        <div className="sign-up-containter">
        <h2>Already  have an account ?</h2>
        <span>Sign In with your email and password</span>
        <form onSubmit={submithandler}>
            <Forminput 
            lebel = 'email'
            type="email" 
            name="email"
            value={email}
            onChange={eventhandler}
            required/>

            <Forminput 
            lebel="password"
            type="password" 
            name="password"
            value={password}
            onChange={eventhandler}
            required/>

            <div className="button-containers">
            <Button   type="submit" >Sign in</Button>
            <Button  buttontype="google" onClick={googlepopup} >google Sign in</Button>
            </div>
        </form>
        </div>
    );

}

export default SigninForm;
