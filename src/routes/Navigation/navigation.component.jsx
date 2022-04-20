import { Outlet,Link } from "react-router-dom"
import { Fragment , useContext } from "react";
import { ReactComponent as Crownlogo } from "../../assets/crown.svg";
import './navigation.styles.scss';
import { Usercontext } from "../../contexts/user.contexts";
const Navigationbar = ()=> {

const {currentUser} = useContext(Usercontext);
console.log(currentUser)
    return (
    <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <Crownlogo className="logo" />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link " to='/shop'>
                    Shop
                </Link>
                <Link className="nav-link " to='/auth'>
                    Signin
                </Link>
            </div>
        </div>
    <Outlet/>
    </Fragment>
    )
} 

export default Navigationbar;