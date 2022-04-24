
import { useContext } from 'react';
import { Cartcontext } from '../../contexts/cart.contexts';
import './checkout.styles.scss';
const Checkout =()=>{
    const {cartitems, additemtocart, removeitemtocart} = useContext(Cartcontext);
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
                        <div key={id}>
                            <h2>{name}</h2>
                            <span>{quantity}</span>
                            <br />
                            <span onClick={()=>removeitemtocart(cartitem)}>decrement</span>
                            <br />
                            <span onClick={()=>additemtocart(cartitem)}>increment</span>

                        </div>
                    );
                })
            }
        <span className='Total'>Total : 0 </span>
    </div>
);

}

export default Checkout;