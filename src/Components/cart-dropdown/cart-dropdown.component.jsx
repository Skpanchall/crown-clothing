import {useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import {CartDropdowncontainer , Cartitems, Emptymsg} from './cart-dropdown.styles.jsx';
import Button from '../button/Button.components';
import Cartitem from '../cart-item/cart-item.componet';
import { Selectcartitems } from '../../strore/cart/cart.selector.js';
const CartDropdown=()=>{
    const cartitems = useSelector(Selectcartitems);
    const navigate = useNavigate();
    const checkouthandler = () =>{
        navigate('/checkout');
    }
    return (
        <CartDropdowncontainer>
            <Cartitems>
                {cartitems.length ? (
                        cartitems.map(item => <Cartitem key={item.id}  cartitem={item}/>)
                        ) : ( <Emptymsg> Your cart Empty </Emptymsg
                        > )}
                
            </Cartitems>
                <Button onClick={checkouthandler}> go to checkout</Button>
        </CartDropdowncontainer>
    )

}
export default CartDropdown;