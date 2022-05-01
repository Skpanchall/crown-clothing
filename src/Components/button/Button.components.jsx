import {GoogleSigninbutton,Basebutton, Invertedbutton} from './button.styles.jsx';
export const BUTTON_TYPE_CLASSES = {
    base : 'base',
    google : 'google-sign-in',
    inverted : 'inverted'
};

const getbutton =(buttontype = BUTTON_TYPE_CLASSES.base)=>(
    {

        [BUTTON_TYPE_CLASSES.base] : Basebutton,
        [BUTTON_TYPE_CLASSES.google] : GoogleSigninbutton, 
        [BUTTON_TYPE_CLASSES.inverted] : Invertedbutton,
    }[buttontype]
);
const Button =({children , buttontype , ...otherprops})=>{
    const Custombutton = getbutton(buttontype);
    return(
        <Custombutton {...otherprops}>
            {children}
        </Custombutton>
    );
}
export default Button;