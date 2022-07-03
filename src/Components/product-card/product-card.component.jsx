import { useDispatch, useSelector } from 'react-redux';
import Button ,{BUTTON_TYPE_CLASSES}from "../button/Button.components";
import './product-card.styles.scss';
import { Selectcartitems } from "../../strore/cart/cart.selector";
import { additemtocart } from "../../strore/cart/cart.action";
const Productcard = ({product}) =>{
    const dispatch = useDispatch();
    const cartitems = useSelector(Selectcartitems);
    const {name,price,imageUrl} = product;
    const producttoadd = () => dispatch(additemtocart(cartitems,product)) ;
    return (
        <div className="product-card-container">
            <img src={imageUrl}  alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttontype={BUTTON_TYPE_CLASSES.inverted} onClick={producttoadd}>Add to cart</Button>
        </div>
    );
}
export default Productcard;