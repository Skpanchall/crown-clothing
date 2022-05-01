import { Link } from "react-router-dom";
import Productcard from "../product-card/product-card.component";
import './category-preview.styles.scss';

const Categorypreview = ({title , products}) =>{
    return (
        <div className="category-preview-container">
            <Link className="title" to={title}>{title}</Link>
            <div className="preview">
                {
                    products.filter((_,idx) => idx < 4 ).map(
                        (product)=><Productcard key={product.id}  product={product}/>
                    )
                }
            </div>
        </div>
    );

}
export default Categorypreview;