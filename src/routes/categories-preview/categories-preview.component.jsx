import {  Fragment,} from "react";
import { useSelector } from "react-redux";
import './categories-preview.styles.scss';
import Categorypreview from "../../Components/categoty-preview/category-preview.component";
import { getcategory } from "../../strore/categories/category.selector";

const Categoriespreview =()=>{
    const categories = useSelector(getcategory)
    return (
        <Fragment >
            {
                Object.keys(categories).map((title)=>
                {
                    const products = categories[title];
                    return <Categorypreview key={title} title={title} products={products}/>
                }
                )
            }
        </Fragment>
    );

}

export default Categoriespreview;