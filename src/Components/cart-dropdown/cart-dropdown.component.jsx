import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {CartDropdowncontainer , Cartitems, Emptymsg} from './cart-dropdown.styles.jsx';
import Button from '../button/Button.components';
import Cartitem from '../cart-item/cart-item.componet';
import { Cartcontext } from '../../contexts/cart.contexts';

const CartDropdown=()=>{
    
    const {cartitems} = useContext(Cartcontext);
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