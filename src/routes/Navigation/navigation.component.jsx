import { Outlet,Link } from "react-router-dom"
import { Fragment , useContext } from "react";
import { ReactComponent as Crownlogo } from "../../assets/crown.svg";
import './navigation.styles.scss';
import { Usercontext } from "../../contexts/user.contexts";
import { signoutuser } from "../../utility/firebase/firebase.component";
const Navigationbar = ()=> {

const {currentUser, setcurrentuser} = useContext(Usercontext);

const signouthandler = async() =>{
    await signoutuser();
    setcurrentuser(null);
}
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
                {
                    currentUser ? (
                        <span className="nav-link" onClick={signouthandler}>SIGN OUT</span>
                    ) : (<Link className="nav-link " to='/auth'>
                    Signin
                </Link>)
                }
                
            </div>
        </div>
    <Outlet/>
    </Fragment>
    )
} 

export default Navigationbar;