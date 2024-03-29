import './cart-item.styles.scss'
const Cartitem = ({cartitem}) =>{
    const {name, imageUrl,price ,quantity} = cartitem;
    return(
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='item-details'>
            <span className='name'>{name}</span>
                <span>{quantity} * ${price}</span>
            </div>
        </div>
    )

}

export default Cartitem;