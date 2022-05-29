import { useEffect, useContext, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import Productcard from "../../Components/product-card/product-card.component";
import { Categoriescontext } from "../../contexts/catrgories.contexts";
import {CategoryContainer,Title} from  './category.styles.jsx'
const Category = ()=>{
    const {category} = useParams();
    const {categories} = useContext(Categoriescontext);
    const  [products,setproducts]= useState(categories[category]);
    useEffect(()=>{
    setproducts(categories[category])

    },[category,categories]);

    return(
        <Fragment>
            <Title>{category}</Title>
            <CategoryContainer>
                {products &&
                    products.map((product)=> {
                    return <Productcard key={product.id} product={product} />
                    })
                }
            </CategoryContainer>    
        </Fragment>
    )


}
export default Category;