import { useEffect, useContext, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import Productcard from "../../Components/product-card/product-card.component";
import { Categoriescontext } from "../../contexts/catrgories.contexts";
import './category.styles.scss'
const Category = ()=>{
    const {category} = useParams();
    const {categories} = useContext(Categoriescontext);
    const  [products,setproducts]= useState([]);
    useEffect(()=>{
    setproducts(categories[category])

    },[category,categories]);

    return(
        <Fragment>
            <h2 className="category-title">{category}</h2>
            <div className="category-container">
                {
                    products.map((product)=> {
                    return <Productcard key={product.id} product={product} />
                    })
                }
            </div>    
        </Fragment>
    )


}
export default Category;