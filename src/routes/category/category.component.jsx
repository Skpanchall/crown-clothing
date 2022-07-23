import { useEffect, useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Productcard from "../../Components/product-card/product-card.component";
import { getcategory , select_categories_loading} from "../../strore/categories/category.selector";
import {CategoryContainer,Title} from  './category.styles.jsx';
import Spinner from "../../Components/spinner/spinner.component";
const Category = ()=>{
    const {category} = useParams();
    const categories = useSelector(getcategory);
    const isloading = useSelector(select_categories_loading);
    const  [products,setproducts]= useState(categories[category]);
    useEffect(()=>{
    setproducts(categories[category])

    },[category,categories]);

    return(
        <Fragment>
            <Title>{category}</Title>
            {
                isloading ? <Spinner/> : <CategoryContainer>
                {products &&
                    products.map((product)=> {
                    return <Productcard key={product.id} product={product} />
                    })
                }
            </CategoryContainer>    
            }
            
        </Fragment>
    )


}
export default Category;