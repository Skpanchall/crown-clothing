
import { useContext } from 'react';
import { Cartcontext } from '../../contexts/cart.contexts';
import './checkout.styles.scss';
import Checkoutitem from '../../Components/checkout-item/checkout-item.component';
const Checkout =()=>{
    const {cartitems , carttotal} = useContext(Cartcontext);

return (
    <div className='checkout-container'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>remove</span>
            </div>
        </div>
            {
                cartitems.map((cartitem)=> {
                    const {id , name ,quantity} = cartitem;
                    return (
                        <Checkoutitem key={cartitem.id} cartitem={cartitem} />
                    );
                })
            }
        <span className='total'>Total : ${carttotal}</span>
    </div>
);

}

export default Checkout;