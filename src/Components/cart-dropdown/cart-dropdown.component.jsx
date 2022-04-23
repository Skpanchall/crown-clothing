import './cart-dropdown.styles.scss';
import Button from '../button/Button.components';
const CartDropdown=()=>{
return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'/>
            <Button> go to checkout</Button>
    </div>
)

}
export default CartDropdown;