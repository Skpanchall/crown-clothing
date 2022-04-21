import { useState , useContext} from "react";
import { createauthuserwithemailandpassword ,CreateUserDocumentfromauth} from "../../utility/firebase/firebase.component";
import Forminput from "../form-input/Form-input.component";
import { Usercontext } from "../../contexts/user.contexts";
import './Sign-up-form.style.scss';
import Button from "../button/Button.components";
const defaultparams = {
    displayName:'',
    email : '',
    password :'',
    confirmpassword:''
    
};

const SignupForm= ()=>{
    const [formfields,setformfields] = useState(defaultparams);
    const { displayName , email, password, confirmpassword }= formfields;

    const resetfields =() =>{
        setformfields(defaultparams);
    }
    const {setcurrentuser} = useContext(Usercontext); 
    const submithandler = async(event)=>{
        event.preventDefault();
        if(password !== confirmpassword){
            alert("password not match! ");
            return;
        }
        try{
            const {user} = await createauthuserwithemailandpassword(email,password);
            
            setcurrentuser(user)
            await CreateUserDocumentfromauth(user,{displayName});
            resetfields();
        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('email already in use     ')
            }else{
            console.log(error)
            }
        }
        // createauthuserwithemailandpassword();
    }
    const eventhandler =(event)=>{
        const {name, value}= event.target;
        setformfields({ ...formfields,[name] : value}); 
    }

    return(
        <div className="sign-up-containter">
        <h2>Dont have an account ?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={submithandler}>
            <Forminput 
            lebel = "displayName"
            type="text"
            name="displayName"
            value={displayName} 
            onChange={eventhandler}
            required/>

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

            <Forminput 
            lebel="confirmpassword"
            type="password" 
            name="confirmpassword"
            value={confirmpassword}
            onChange={eventhandler}
            required/>
            <Button  buttontype="inverted" type="submit" >Sign up</Button>
        </form>
        </div>
    );

}

export default SignupForm;
