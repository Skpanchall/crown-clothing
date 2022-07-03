import {useSelector, useDispatch} from "react-redux";
import {ShoppingIcon ,Carticoncontainer ,Itemcount} from  './cart-icon.styles.jsx';
import { setCartisopen } from '../../strore/cart/cart.action.js';
import { SelectCartisopen,selectcartcount } from '../../strore/cart/cart.selector.js';

const Carticon =()=>{
const dispatch = useDispatch();
const iscartopen = useSelector(SelectCartisopen);
const cartcounter = useSelector(selectcartcount);

const toggleiscartopen = () => dispatch(setCartisopen(!iscartopen))
    return(
        <Carticoncontainer onClick={toggleiscartopen}>
            <ShoppingIcon />
            <Itemcount>{cartcounter}</Itemcount>
        </Carticoncontainer>
    );

}
export default Carticon;