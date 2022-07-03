import { useDispatch, useSelector } from 'react-redux';
import './checkout-item.styles.scss';
import { clearitemfromcart,additemtocart, removeitemtocart } from '../../strore/cart/cart.action';
import { Selectcartitems } from '../../strore/cart/cart.selector';
const Checkoutitem = ({cartitem}) =>{
    
    const cartitems = useSelector(Selectcartitems)
    const dispatch = useDispatch();
    const {name,imageUrl, price ,quantity} = cartitem; 

    const clearitemhandler = () => dispatch(clearitemfromcart(cartitems,cartitem));
    const additemhandler = () => dispatch(additemtocart(cartitems,cartitem));
    const removeitemhandler = () => dispatch(removeitemtocart(cartitems,cartitem));


    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeitemhandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={additemhandler}>&#10095;</div>
                </span>
            <span className='price'>{price}</span>
            <div onClick={clearitemhandler}>&#1005;</div>
        </div>
    );

}
export default Checkoutitem;