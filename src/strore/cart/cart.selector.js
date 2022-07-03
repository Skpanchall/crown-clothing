import {createSelector} from 'reselect';

export const SelectCartReducer = state => state.cart;

export const Selectcartitems = createSelector(
    [SelectCartReducer],
    (SelectCartReducer)=> SelectCartReducer.cartitems
);

export const SelectCartisopen = createSelector(
    [SelectCartReducer],
    (SelectCartReducer)=> SelectCartReducer.iscartopen
)

export const selectcartcount = createSelector(
    [Selectcartitems],
    (Selectcartitems)=> Selectcartitems.reduce((total,cartitem)=> total + cartitem.quantity ,0)
);

export const selectcarttotal = createSelector(
    [Selectcartitems],
    (Selectcartitems)=> Selectcartitems.reduce((total,cartitem)=>  cartitem.quantity * cartitem.price,0)
);
