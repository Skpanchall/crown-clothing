import { useContext } from "react";
import { Productcontext } from "../../contexts/product.contexts";
import Productcard from "../../Components/product-card/product-card.component";
import './shop.styles.scss';
const Shop =()=>{
    const { product } = useContext(Productcontext);
    return (
        <div className="products-container">
            {
                product.map((products) => (
                   <Productcard key={products.id}  product={products}/>
                ))
            }
        </div>
    );

}

export default Shop;