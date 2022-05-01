import { createContext, useState , useEffect} from "react";
import { getcategoriesanddocuments } from "../utility/firebase/firebase.component.jsx";

export const Categoriescontext = createContext({
    categories : []
})


export const CategoriesProvider = ({children})=>{
    const [categories , setcategories] = useState([]);
    useEffect(()=>{
        const getcategories = async() =>{
            const categories = await getcategoriesanddocuments();
            setcategories(categories);
        }
        getcategories();

    },[]);

    const value = {categories};

    return <Categoriescontext.Provider value={value}>{children}</Categoriescontext.Provider>
}