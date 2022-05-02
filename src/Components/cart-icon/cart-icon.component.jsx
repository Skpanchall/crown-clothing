import { useContext } from 'react';
import {ShoppingIcon ,Carticoncontainer ,Itemcount} from  './cart-icon.styles.jsx';
import { Cartcontext } from '../../contexts/cart.contexts';
const Carticon =()=>{

const {iscartopen , setiscartopen, cartcounter} = useContext(Cartcontext);
const toggleiscartopen = () => setiscartopen(!iscartopen);
    return(
        <Carticoncontainer onClick={toggleiscartopen}>
            <ShoppingIcon />
            <Itemcount>{cartcounter}</Itemcount>
        </Carticoncontainer>
    );

}
export default Carticon;