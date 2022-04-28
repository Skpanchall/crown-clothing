import { Fragment, useContext } from "react";
import { Categoriescontext } from "../../contexts/product.contexts";
import Productcard from "../../Components/product-card/product-card.component";
import './shop.styles.scss';
const Shop =()=>{
    const { categories } = useContext(Categoriescontext);
    return (
        <Fragment>
            {
                Object.keys(categories).map((title)=>
                <Fragment>
                    <h2>{title}</h2>
                    <div>
                    {
                        categories[title].map((products) => (
                        <Productcard key={products.id}  product={products}/>
                        ))
                    }
                    </div>
                </Fragment>
                )
            }
        <div className="products-container">
            
        </div>
        </Fragment>
    );

}

export default Shop;