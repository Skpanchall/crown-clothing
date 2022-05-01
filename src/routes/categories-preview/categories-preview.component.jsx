import {  Fragment, useContext } from "react";
import { Categoriescontext } from "../../contexts/catrgories.contexts";
import './categories-preview.styles.scss';
import Categorypreview from "../../Components/categoty-preview/category-preview.component";

const Categoriespreview =()=>{
    const { categories } = useContext(Categoriescontext);
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