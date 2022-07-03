
import { useSelector } from 'react-redux';

import './checkout.styles.scss';
import Checkoutitem from '../../Components/checkout-item/checkout-item.component';
import { Selectcartitems, selectcarttotal } from '../../strore/cart/cart.selector';
const Checkout =()=>{
    const cartitems = useSelector(Selectcartitems);
    const carttotal = useSelector(selectcarttotal);

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