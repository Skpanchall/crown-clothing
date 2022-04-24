import { useContext } from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss';
import { Cartcontext } from '../../contexts/cart.contexts';
const Carticon =()=>{

const {iscartopen , setiscartopen, cartcounter} = useContext(Cartcontext);
const toggleiscartopen = () => setiscartopen(!iscartopen);
    return(
        <div className='cart-icon-container' onClick={toggleiscartopen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartcounter}</span>
        </div>
    );

}
export default Carticon;