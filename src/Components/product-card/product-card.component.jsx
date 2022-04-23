
import Button from "../button/Button.components";
import './product-card.styles.scss';
const Productcard = ({product}) =>{
    const {name,price,imageUrl} = product;
    return (
        <div className="product-card-container">
            <img src={imageUrl}  alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttontype="inverted" >Add to cart</Button>
        </div>
    );
}
export default Productcard;