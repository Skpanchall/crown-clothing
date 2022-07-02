import {Routes,Route} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getcategoriesanddocuments } from '../../utility/firebase/firebase.component';
import { setcategories } from '../../strore/categories/category.action';
import Categoriespreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
const Shop =()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        const getcategories = async() =>{
            const categories = await getcategoriesanddocuments();
            dispatch(setcategories(categories));
        }
        getcategories(); 

    },[]);
    return (
        <Routes>
            <Route index element={<Categoriespreview/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    );

}

export default Shop;