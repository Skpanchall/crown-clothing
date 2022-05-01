import { Outlet,Link } from "react-router-dom"
import { Fragment , useContext } from "react";
import { ReactComponent as Crownlogo } from "../../assets/crown.svg";
import Carticon from "../../Components/cart-icon/cart-icon.component";
import  {Navigationcontainer,Logocontainer,Navlinks,Navlink} from './navigation.styles.jsx';
import { Usercontext } from "../../contexts/user.contexts";
import { Cartcontext } from "../../contexts/cart.contexts";
import { signoutuser } from "../../utility/firebase/firebase.component";
import CartDropdown from "../../Components/cart-dropdown/cart-dropdown.component";
const Navigationbar = ()=> {

const {currentUser } = useContext(Usercontext);
const {iscartopen} = useContext(Cartcontext);

    return (
    <Fragment>
        <Navigationcontainer>
            <Logocontainer to='/'>
                <Crownlogo className="logo" />
            </Logocontainer>
            <Navlinks>
                <Navlink  to='/shop'>
                    Shop
                </Navlink>
                {
                    currentUser ? (
                        <Navlink   onClick={signoutuser}>SIGN OUT</Navlink>
                    ) : (<Navlink  to='/auth'>
                    Signin
                    </Navlink>)
                }
            <Carticon/>    
            </Navlinks>
            {iscartopen && <CartDropdown/>}
        </Navigationcontainer>
    <Outlet/>
    </Fragment>
    )
} 

export default Navigationbar;