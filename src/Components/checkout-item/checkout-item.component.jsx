import { useContext } from 'react';
import './checkout-item.styles.scss';
import { Cartcontext } from '../../contexts/cart.contexts';
const Checkoutitem = ({cartitem}) =>{

    const {name,imageUrl, price ,quantity} = cartitem; 
    const {clearitemfromcart , additemtocart, removeitemtocart} = useContext(Cartcontext);
    const clearitemhandler = () => clearitemfromcart(cartitem);
    const additemhandler = () => additemtocart(cartitem);
    const removeitemhandler = () => removeitemtocart(cartitem);


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