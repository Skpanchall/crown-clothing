import {Routes,Route} from 'react-router-dom'
import Categoriespreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
const Shop =()=>{
    return (
        <Routes>
            <Route index element={<Categoriespreview/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    );

}

export default Shop;