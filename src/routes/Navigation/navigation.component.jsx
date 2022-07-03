import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux";
import { Fragment } from "react";
import { ReactComponent as Crownlogo } from "../../assets/crown.svg";
import Carticon from "../../Components/cart-icon/cart-icon.component";
import  {Navigationcontainer,Logocontainer,Navlinks,Navlink} from './navigation.styles.jsx';
import { signoutuser } from "../../utility/firebase/firebase.component";
import CartDropdown from "../../Components/cart-dropdown/cart-dropdown.component";
import { selectcurrentuser } from "../../strore/user/user.selector";
import { SelectCartisopen } from "../../strore/cart/cart.selector";
const Navigationbar = ()=> {

const currentUser = useSelector(selectcurrentuser);
const iscartopen = useSelector(SelectCartisopen);
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
                        <Navlink as= "span" onClick={signoutuser}>SIGN OUT</Navlink>
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