import { useState } from "react";

const defaultparams = {
    Displayname:'',
    email : '',
    password :'',
    confirmpassword:''
    
};
const SignupForm= ()=>{
    const [formfields,setformfields] = useState(defaultparams);
    console.log(formfields)
    const { Displayname , email, password, confirmpassword }= formfields;
    const eventhandler =(event)=>{
        const {name, value}= event.target;
        setformfields({ ...formfields,[name] : value}); 
    }
    return(
        <>
        <h1> Sign up form</h1>
        <form onSubmit={()=>{}}>
            <label >Displayname</label>
            <input 
            type="text"
            name="Displayname"
            value={Displayname} 
            onChange={eventhandler}
            required/>
            
            <label >email</label>
            <input 
            type="text" 
            name="email"
            value={email}
            onChange={eventhandler}
            required/>

            <label >password</label>
            <input 
            type="text" 
            name="password"
            value={password}
            onChange={eventhandler}
            required/>

            <label >confirmpassword</label>
            <input 
            type="text" 
            name="confirmpassword"
            value={confirmpassword}
            onChange={eventhandler}
            required/>
            <input type="submit"  />
        </form>
        </>
    );

}

export default SignupForm;
