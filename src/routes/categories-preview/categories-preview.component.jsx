import {  Fragment,} from "react";
import { useSelector } from "react-redux";
import './categories-preview.styles.scss';
import Categorypreview from "../../Components/categoty-preview/category-preview.component";
import { getcategory , select_categories_loading } from "../../strore/categories/category.selector";
import Spinner from "../../Components/spinner/spinner.component";
const Categoriespreview =()=>{
    const categories = useSelector(getcategory)
    const isloading = useSelector(select_categories_loading);
    return (
        <Fragment >
            { isloading ? <Spinner/> : 
               ( Object.keys(categories).map((title)=>
                {
                    const products = categories[title];
                    return <Categorypreview key={title} title={title} products={products}/>
                }
                )
                )
            }
        </Fragment>
    );

}

export default Categoriespreview;