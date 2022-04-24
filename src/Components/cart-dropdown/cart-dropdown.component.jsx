import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './cart-dropdown.styles.scss';
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
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartitems.map(item => <Cartitem key={item.id}  cartitem={item}/>)
                }
            </div>
                <Button onClick={checkouthandler}> go to checkout</Button>
        </div>
    )

}
export default CartDropdown;