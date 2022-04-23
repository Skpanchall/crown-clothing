import { Outlet,Link } from "react-router-dom"
import { Fragment , useContext } from "react";
import { ReactComponent as Crownlogo } from "../../assets/crown.svg";
import Carticon from "../../Components/cart-icon/cart-icon.component";
import './navigation.styles.scss';
import { Usercontext } from "../../contexts/user.contexts";
import { Cartcontext } from "../../contexts/cart.contexts";
import { signoutuser } from "../../utility/firebase/firebase.component";
import CartDropdown from "../../Components/cart-dropdown/cart-dropdown.component";
const Navigationbar = ()=> {

const {currentUser } = useContext(Usercontext);
const {iscartopen} = useContext(Cartcontext);

    return (
    <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <Crownlogo className="logo" />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                    Shop
                </Link>
                {
                    currentUser ? (
                        <span className="nav-link" onClick={signoutuser}>SIGN OUT</span>
                    ) : (<Link className="nav-link" to='/auth'>
                    Signin
                    </Link>)
                }
            <Carticon/>    
            </div>
            {iscartopen && <CartDropdown/>}
        </div>
    <Outlet/>
    </Fragment>
    )
} 

export default Navigationbar;