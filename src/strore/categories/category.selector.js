import { createSelector } from "reselect";

export const selectcategoryreducer  = (state)=>{
    return state.category;
}

export const selectcategories = createSelector(
    [selectcategoryreducer],
    (categoriesslice)=>categoriesslice.categories
);

export const getcategory = createSelector(
    [selectcategories],
    (categories)=>{
        return categories.reduce((acc,dacsnapshot)=>{
            const {title,items} = dacsnapshot;
            acc[ title.toLowerCase() ]= items;
            return acc;
      },{});
    }
);


export const select_categories_loading = createSelector(
    [selectcategoryreducer],
    (categoriesslice)=>categoriesslice.isloading
)