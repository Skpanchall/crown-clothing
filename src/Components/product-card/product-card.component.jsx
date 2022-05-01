import { useContext } from "react";
import Button ,{BUTTON_TYPE_CLASSES}from "../button/Button.components";
import './product-card.styles.scss';
import { Cartcontext } from "../../contexts/cart.contexts";
const Productcard = ({product}) =>{
    const {name,price,imageUrl} = product;
    const {additemtocart} = useContext(Cartcontext);
    const producttoadd = () => additemtocart(product) ;
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