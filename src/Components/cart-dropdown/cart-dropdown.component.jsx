import { useContext } from 'react';
import './cart-dropdown.styles.scss';
import Button from '../button/Button.components';
import Cartitem from '../cart-item/cart-item.componet';
import { Cartcontext } from '../../contexts/cart.contexts';
const CartDropdown=()=>{
const {cartitems} = useContext(Cartcontext);
console.log(cartitems)
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartitems.map(item => <Cartitem key={item.id}  cartitem={item}/>)
                }
            </div>
                <Button> go to checkout</Button>
        </div>
    )

}
export default CartDropdown;