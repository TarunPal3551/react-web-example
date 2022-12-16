import '../styles/CartView.css'
import CartEmptyImage from "../assets/empty_cart.svg"
export default function CartView(){
    return (<div className="cartView">
<div className='emptyView'>
    <div className='headingCart'>
    CART EMPTY
    </div>
    <div className='imageView'>
    <img src={CartEmptyImage}/>
    </div>
   
</div>
    </div>);
}